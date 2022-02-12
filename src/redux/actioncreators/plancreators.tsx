import axios from "axios";
import { Dispatch } from "redux";
import { Bolton, CallRate, Plan } from "../../components/__types__/types";
import * as planTypes from "../actionTypes/fixedplantypes";
import _ from "underscore";
async function getPlans() {
  const { data } = await axios.get(
    "https://offer.optus.com.au/fixed-angular-plan-refresh/?cType=consumer"
  );
  const plans = data.plans;
  const boltons = data.boltons;
  plans.forEach((plan: Plan) => {
    if (plan.boltonList.length > 0) {
      plan.boltonList = plan.boltonList.replace(/\|Startup_Fee_99/, "");
      plan.startupFee = plan.startupFee === 99 ? 0 : plan.startupFee;
      if (plan.startupFee === 99) {
        plan.startupFee = 0;
      }
      const eligiableBoltons = plan.boltonList.split("|");
      const boltonEligible: any = [];

      eligiableBoltons.forEach((boltonid: any) => {
        const k = boltonid;
        const item = boltons.find((arr: any) => boltonid === arr.id);
        boltonEligible[k] = item;
      });
      plan.allBoltons = boltonEligible;
    }

    const selectedBoltons = _.where(plan.allBoltons, { included: true });
    _.each(selectedBoltons, (item) => {
      if (typeof item != "undefined") {
        item.added = true;
      }
    });
    plan.selectedBoltons = selectedBoltons;
    plan.selected = false;
    plan.speedPackCost = 0;
    plan.monthly = 0;
    plan.upfront = 0;
    plan.mtc = 0;
  });

  return plans;
}

export const getnbnPlans = () => {
  const plans = getPlans();
  return (dispatch: Dispatch) => {
    plans.then((plans) => {
      const nbnPlans = plans.filter((plan: any) => plan.tech === "NBN");
      try {
        dispatch({
          type: planTypes.GET_PLANS_NBN_REQUEST,
        });
        dispatch({
          type: planTypes.GET_PLANS_NBN_SUCCESS,
          payload: nbnPlans,
        });
      } catch (error) {
        dispatch({
          type: planTypes.GET_PLANS_NBN_FAILURE,
          payload: error,
        });
      }
    });
  };
};

export const getfivegPlans = () => {
  const plans = getPlans();
  return (dispatch: Dispatch) => {
    plans.then((plans) => {
      const fiveGPlans = plans.filter((plan: any) => plan.tech === "5G");
      try {
        dispatch({
          type: planTypes.GET_PLANS_5G_REQUEST,
        });
        dispatch({
          type: planTypes.GET_PLANS_5G_SUCCESS,
          payload: fiveGPlans,
        });
      } catch (error) {
        dispatch({
          type: planTypes.GET_PLANS_5G_FAILURE,
          payload: error,
        });
      }
    });
  };
};

export const gethomephonePlans = () => {
  const plans = getPlans();
  return (dispatch: Dispatch) => {
    plans.then((plans) => {
      const homephonePlans = plans.filter((plan: any) => plan.tech === "homephone");
      try {
        dispatch({
          type: planTypes.GET_PLANS_HOMEPHONE_REQUEST,
        });
        dispatch({
          type: planTypes.GET_PLANS_HOMEPHONE_SUCCESS,
          payload: homephonePlans,
        });
      } catch (error) {
        dispatch({
          type: planTypes.GET_PLANS_HOMEPHONE_FAILURE,
          payload: error,
        });
      }
    });
  };
};
