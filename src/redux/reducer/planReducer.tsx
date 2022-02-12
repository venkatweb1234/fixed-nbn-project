import * as planTypes from '../actionTypes/fixedplantypes';

export const getPlansReducer = (state = { plans: []}, action: any) => {
  switch (action.type) {
    case planTypes.GET_PLANS_NBN_REQUEST:
      return {
        loading: true,
        plans: []
      };
    case planTypes.GET_PLANS_NBN_SUCCESS:
      return {
        loading: false,
        plans: action.payload,
      };
    case planTypes.GET_PLANS_NBN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getfivegPlansReducer = (state = { plansfiveg: []}, action: any) => {
  switch (action.type) {
    case planTypes.GET_PLANS_5G_REQUEST:
      return {
        loading: true,
        plansfiveg: []
      };
    case planTypes.GET_PLANS_5G_SUCCESS:
      return {
        loading: false,
        plansfiveg: action.payload,
      };
    case planTypes.GET_PLANS_5G_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const gethomephonePlansReducer = (state = { plansHomephone: []}, action: any) => {
  switch (action.type) {
    case planTypes.GET_PLANS_HOMEPHONE_REQUEST:
      return {
        loading: true,
        plansHomephone: []
      };
    case planTypes.GET_PLANS_HOMEPHONE_SUCCESS:
      return {
        loading: false,
        plansHomephone: action.payload,
      };
    case planTypes.GET_PLANS_HOMEPHONE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};