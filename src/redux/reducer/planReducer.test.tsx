import {
  getPlansReducer,
  getfivegPlansReducer,
  gethomephonePlansReducer,
} from "./planReducer";
import { GET_PLANS_5G_FAILURE, GET_PLANS_5G_REQUEST, GET_PLANS_5G_SUCCESS, GET_PLANS_HOMEPHONE_FAILURE, GET_PLANS_HOMEPHONE_REQUEST, GET_PLANS_HOMEPHONE_SUCCESS, GET_PLANS_NBN_FAILURE, GET_PLANS_NBN_REQUEST, GET_PLANS_NBN_SUCCESS } from "../actionTypes/fixedplantypes";

const mockPlanNBN5G4GItems = [
  {
    idx: 3,
    planID: "35287734",
    name: "Internet Gamer Fast",
    tech: "NBN",
    broadband: "FBB",
    telephony: "FTEL",
    cost: 99,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: "",
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35287734_InternetGamerFastAug21_NBN.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "ASUS_GAMING_MODEM|NBN_Speed_Pack_3_Plus_Included|Home_Superfast_premium_6mths_disc|Home_Ultrafast_premium_6mths_disc|Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Fetch_Mini_5_Discount_12mths|No_Fetch_Mini|Fetch_Mighty_New_15|Optus_Sport_Free|Fetch_Ultimate_90_Plan|Fetch_Channel_Discount|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Install_Assistance|Startup_Fee_99|Dev_Charge_300|Phone_line_plan_10|Phone_line_plan_Lite|Phone_line_plan_Free|Game_Path_discount_1_month|Static_IP_10|Static_IP_Free|Game_Path_3mth_Discount|Optus_Ultra_WiFi_Booster_36_mth_Qty_1|Optus_Ultra_WiFi_Booster_24_mth_Qty_1|Optus_Ultra_WiFi_Booster_12_mth_Qty_1|Optus_Ultra_WiFi_Booster_Once_off_Qty_1|Optus_Ultra_WiFi_Booster_36_mth_Qty_2|Optus_Ultra_WiFi_Booster_24_mth_Qty_2|Optus_Ultra_WiFi_Booster_12_mth_Qty_2|Optus_Ultra_WiFi_Booster_Once_off_Qty_2|Optus_Ultra_WiFi_Booster_36_mth_Qty_3|Optus_Ultra_WiFi_Booster_24_mth_Qty_3|Optus_Ultra_WiFi_Booster_12_mth_Qty_3|Optus_Ultra_WiFi_Booster_Once_off_Qty_3|Premium_Speed_Pack_NBN_Upload",
    flybuysPoints: "150",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-30000-points.png",
    position: 4,
  },
  {
    idx: 6,
    planID: "35287684",
    name: "Internet Everyday",
    tech: "NBN",
    broadband: "FBB",
    telephony: "FTEL",
    cost: 79,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: "",
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35287684_InternetEverydayAug21_NBN.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "OPTUS_ULTRA_WIFI_MODEM|Optus_Ultra_WiFi_Booster_12_mth_Qty_1|Optus_Ultra_WiFi_Booster_12_mth_Qty_2|Optus_Ultra_WiFi_Booster_12_mth_Qty_3|Optus_Ultra_WiFi_Booster_24_mth_Qty_1|Optus_Ultra_WiFi_Booster_24_mth_Qty_2|Optus_Ultra_WiFi_Booster_24_mth_Qty_3|Optus_Ultra_WiFi_Booster_36_mth_Qty_1|Optus_Ultra_WiFi_Booster_36_mth_Qty_2|Optus_Ultra_WiFi_Booster_36_mth_Qty_3|Optus_Ultra_WiFi_Booster_Once_off_Qty_1|Optus_Ultra_WiFi_Booster_Once_off_Qty_2|Optus_Ultra_WiFi_Booster_Once_off_Qty_3|Speed_Pack3_NBN_FBB|NBN_Speed_Pack_3_Plus|Home_Ultrafast_standard_6mths_disc|Home_Superfast_standard_6mths_disc|Optus_Wifi_Secure|Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Fetch_Mini_5_Discount_12mths|No_Fetch_Mini|Optus_Sport_Free|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Fetch_Channel_Discount|Install_Assistance|Startup_Fee_99|Dev_Charge_300|Phone_line_plan_10|Phone_line_plan_Free|Fetch_Mighty_New_15|Fetch_Ultimate_75_Plan|Phone_line_plan_Lite|Static_IP_10|Game_Path_discount_1_month|Premium_Standard_Speed_Pack_NBN_Upload",
    flybuysPoints: "120",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-25000-points.png",
    position: 1,
  },
  {
    idx: 7,
    planID: "35287714",
    name: "Internet Everyday Fast",
    tech: "NBN",
    broadband: "FBB",
    telephony: "FTEL",
    cost: 99,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: 10,
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35287714_InternetEverydayFastAug21_NBN.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "OPTUS_ULTRA_WIFI_MODEM|Premium_Speed_Pack_NBN_Upload|Optus_Wifi_Secure|Optus_Ultra_WiFi_Booster_12_mth_Qty_1|Optus_Ultra_WiFi_Booster_12_mth_Qty_2|Optus_Ultra_WiFi_Booster_12_mth_Qty_3|Optus_Ultra_WiFi_Booster_24_mth_Qty_1|Optus_Ultra_WiFi_Booster_24_mth_Qty_2|Optus_Ultra_WiFi_Booster_24_mth_Qty_3|Optus_Ultra_WiFi_Booster_36_mth_Qty_1|Optus_Ultra_WiFi_Booster_36_mth_Qty_2|Optus_Ultra_WiFi_Booster_36_mth_Qty_3|Optus_Ultra_WiFi_Booster_Once_off_Qty_1|Optus_Ultra_WiFi_Booster_Once_off_Qty_2|Optus_Ultra_WiFi_Booster_Once_off_Qty_3|Home_Superfast_premium_6mths_disc|Home_Ultrafast_premium_6mths_disc|NBN_Speed_Pack_3_Plus_Included|NBN_Speed_Pack_5_35|NBN_Speed_Pack_6_55|Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Fetch_Mighty_New_15|Fetch_Mini_5_Discount_12mths|No_Fetch_Mini|Fetch_Ultimate_90_Plan|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Fetch_Channel_Discount|Optus_Sport_Free|Install_Assistance|Startup_Fee_99|Dev_Charge_300|Phone_line_plan_10|Phone_line_plan_Free|Phone_line_plan_Lite|Static_IP_10|Disc_6mnths_Internet_Everyday_Fast_10|Game_Path_discount_1_month",
    flybuysPoints: "150",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-30000-points.png",
    position: 3,
  },
  {
    idx: 9,
    planID: "35283484",
    name: "5G Internet Everyday",
    tech: "5G",
    broadband: "5G",
    telephony: "",
    cost: 79,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: "",
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35283484_CIS_5G_Internet_Everyday.pdf",
    affiliate: "",
    callRate: "",
    earlyReconFee: "",
    broadbandCancellFee: "",
    telCancellFee: "",
    boltonList:
      "5G_Modem|Optus_Sport_Free|5G_One_month_free_offer_79|Startup_Fee_Free",
    flybuysPoints: "15000",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-15000.png",
    position: "",
  },
  {
    idx: 11,
    planID: "35283494",
    name: "5G Internet Entertainer",
    tech: "5G",
    broadband: "5G",
    telephony: "",
    cost: 99,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: 10,
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35283494_CIS_5G_Internet_Entertainer.pdf",
    affiliate: "",
    callRate: "",
    earlyReconFee: "",
    broadbandCancellFee: "",
    telCancellFee: "",
    boltonList:
      "5G_Modem|Fetch_Mighty|Optus_Sport_Free|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Fetch_Channel_Discount|5G_One_month_free_offer_99|Disc_6mnths_Internet_Entertainer_10|Startup_Fee_Free",
    flybuysPoints: "20000",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-20000-points.png",
    position: "",
  },
  {
    idx: 12,
    planID: "35287694",
    name: "Family Internet Ultimate",
    tech: "NBN",
    broadband: "FBB",
    telephony: "FTEL",
    cost: 89,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: 10,
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35287694_InternetUltimateAug21_NBN.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "Disc_6mnths_Internet_ultimate_10|OPTUS_ULTRA_WIFI_MODEM|Optus_Ultra_WiFi_Booster|Optus_Ultra_WiFi_Booster_12_mth_Qty_1|Optus_Ultra_WiFi_Booster_12_mth_Qty_2|Optus_Ultra_WiFi_Booster_12_mth_Qty_3|Optus_Ultra_WiFi_Booster_24_mth_Qty_1|Optus_Ultra_WiFi_Booster_24_mth_Qty_2|Optus_Ultra_WiFi_Booster_24_mth_Qty_3|Optus_Ultra_WiFi_Booster_36_mth_Qty_1|Optus_Ultra_WiFi_Booster_36_mth_Qty_2|Optus_Ultra_WiFi_Booster_36_mth_Qty_3|Optus_Ultra_WiFi_Booster_Once_off_Qty_1|Optus_Ultra_WiFi_Booster_Once_off_Qty_2|Optus_Ultra_WiFi_Booster_Once_off_Qty_3|Speed_Pack3_NBN_FBB|NBN_Speed_Pack_3_Plus|Home_Ultrafast_standard_6mths_disc|Home_Superfast_standard_6mths_disc|Optus_Wifi_Secure|Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Fetch_Mini_5_Discount_12mths|No_Fetch_Mini|Optus_Sport_Free|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Fetch_Channel_Discount|Install_Assistance|Startup_Fee_99|Dev_Charge_300|Phone_line_plan_10|Phone_line_plan_Free|Fetch_Mighty_New_15|Fetch_Ultimate_75_Plan|Phone_line_plan_Lite|Static_IP_10|Game_Path_discount_1_month|Premium_Standard_Speed_Pack_NBN_Upload",
    flybuysPoints: "120",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-25000-points.png",
    position: 2,
  },
  {
    idx: 13,
    planID: "35287724",
    name: "Family Internet Ultimate Fast",
    tech: "NBN",
    broadband: "FBB",
    telephony: "FTEL",
    cost: 109,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: 10,
    contractLength: 1,
    planType: "bundle",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/35287724_InternetUltimateFastAug21_NBN.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "OPTUS_ULTRA_WIFI_MODEM|Optus_Ultra_WiFi_Booster|Optus_Ultra_WiFi_Booster_12_mth_Qty_1|Optus_Ultra_WiFi_Booster_12_mth_Qty_2|Optus_Ultra_WiFi_Booster_24_mth_Qty_1|Optus_Ultra_WiFi_Booster_24_mth_Qty_2|Optus_Ultra_WiFi_Booster_36_mth_Qty_1|Optus_Ultra_WiFi_Booster_36_mth_Qty_2|Optus_Ultra_WiFi_Booster_Once_off_Qty_1|Optus_Ultra_WiFi_Booster_Once_off_Qty_2|Home_Superfast_premium_6mths_disc|Home_Ultrafast_premium_6mths_disc|NBN_Speed_Pack_3_Plus_Included|Home_Superfast_premium_6mths_disc|Home_Ultrafast_premium_6mths_disc|Optus_Wifi_Secure_Discount|Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Fetch_Mighty_New_15|Fetch_Mini_5_Discount_12mths|No_Fetch_Mini|Fetch_Ultimate_90_Plan|Fetch_Kids|Fetch_Knowledge|Fetch_Vibe|Fetch_Variety|Fetch_Channel_Discount|Optus_Sport_Free|Install_Assistance|Startup_Fee_99|Dev_Charge_300|Phone_line_plan_10|Phone_line_plan_Lite|Phone_line_plan_Free|Static_IP_10|Game_Path_discount_1_month|Disc_6mnths_Internet_Ultimate_Fast_10|Premium_Speed_Pack_NBN_Upload",
    flybuysPoints: "150",
    flybuysRoundel:
      "https://image.exacttarget.com/lib/fe9412727565007a72/m/25/flybuys-branded-30000-points.png",
    position: 5,
  },
  {
    idx: 16,
    planID: "33329443",
    name: "Phone Everyday",
    tech: "homephone",
    broadband: "homephone",
    telephony: "FTEL",
    cost: 55,
    startupFee: 0,
    bundleDiscount: 0,
    monthlyDiscount: 0,
    contractLength: 1,
    planType: "naked",
    customerType: "Consumer",
    cis: "https://smb.optus.com.au/opfiles/Shop/All/cis/Cis%20Documents/33329443-Phone-Everyday-50-Feb20-ULL-NBN-HFC.pdf",
    affiliate: "",
    callRate: "AOP_18",
    earlyReconFee: 0,
    broadbandCancellFee: 0,
    telCancellFee: 0,
    boltonList:
      "Show_Number|Hide_Number|List_Number|Unlist_Number|World_Saver|Phone_line_plan_10|Phone_line_plan_Free|Phone_line_plan_Lite",
    flybuysPoints: "",
    flybuysRoundel: "",
    position: "",
  },
];

describe("Render Plans reducer", () => {
  it("Should return the intial state", () => {
    const defaultAction = {
      type: "Default",
      payload: "",
    };
    expect(getPlansReducer({ plans: [] }, defaultAction)).toEqual({
      plans: [],
    });
  });

  it("should handle GET_PLANS_NBN_REQUEST", () => {
    const getPlansNBNRequestAction = {
      type: GET_PLANS_NBN_REQUEST,
    };
    expect(
        getPlansReducer({ plans: [] }, getPlansNBNRequestAction)
    ).toEqual({
      loading: true,
      plans: [],
    });
  });

  it("should handle GET_PLANS_NBN_SUCCESS", () => {
    const getPlansNBNSucessAction = {
      type: GET_PLANS_NBN_SUCCESS,
      payload: mockPlanNBN5G4GItems,
    };
    expect(
        getPlansReducer({ plans: [] }, getPlansNBNSucessAction)
    ).toEqual({
      loading: false,
      plans: mockPlanNBN5G4GItems,
    });
  });

  it("should handle GET_PLANS_NBN_FAILURE", () => {
    const getProductNBNFailureAction = {
      type: GET_PLANS_NBN_FAILURE,
      payload: "Error message",
    };
    expect(
        getPlansReducer({ plans: [] }, getProductNBNFailureAction)
    ).toEqual({
      loading: false,
      error: "Error message",
    });
  });
});


describe("Render Plans5G reducer", () => {
    it("Should return the intial state", () => {
      const defaultAction = {
        type: "Default",
        payload: "",
      };
      expect(getfivegPlansReducer({ plansfiveg: [] }, defaultAction)).toEqual({
        plansfiveg: [],
      });
    });
  
    it("should handle GET_PLANS_5G_REQUEST", () => {
      const getPlansfivegRequestAction = {
        type: GET_PLANS_5G_REQUEST,
      };
      expect(
        getfivegPlansReducer({ plansfiveg: [] }, getPlansfivegRequestAction)
      ).toEqual({
        loading: true,
        plansfiveg: [],
      });
    });
  
    it("should handle GET_PLANS_5G_SUCCESS", () => {
      const getPlansfivegSucessAction = {
        type: GET_PLANS_5G_SUCCESS,
        payload: mockPlanNBN5G4GItems,
      };
      expect(
        getfivegPlansReducer({ plansfiveg: [] }, getPlansfivegSucessAction)
      ).toEqual({
        loading: false,
        plans: mockPlanNBN5G4GItems,
      });
    });
  
    it("should handle GET_PLANS_NBN_FAILURE", () => {
      const getProduct5GFailureAction = {
        type: GET_PLANS_5G_FAILURE,
        payload: "Error message",
      };
      expect(
        getfivegPlansReducer({ plansfiveg: [] }, getProduct5GFailureAction)
      ).toEqual({
        loading: false,
        error: "Error message",
      });
    });
  });

  describe("Render Homephone reducer", () => {
    it("Should return the intial state", () => {
      const defaultAction = {
        type: "Default",
        payload: "",
      };
      expect(gethomephonePlansReducer({ plansHomephone: [] }, defaultAction)).toEqual({
        plansHomephone: [],
      });
    });
  
    it("should handle GET_PLANS_HOMEPHONE_REQUEST", () => {
      const getPlanshpRequestAction = {
        type: GET_PLANS_HOMEPHONE_REQUEST,
      };
      expect(
        gethomephonePlansReducer({ plansHomephone: [] }, getPlanshpRequestAction)
      ).toEqual({
        loading: true,
        plansHomephone: [],
      });
    });
  
    it("should handle GET_PLANS_HOMEPHONE_SUCCESS", () => {
      const getPlanshpSucessAction = {
        type: GET_PLANS_HOMEPHONE_SUCCESS,
        payload: mockPlanNBN5G4GItems,
      };
      expect(
        gethomephonePlansReducer({ plansHomephone: [] }, getPlanshpSucessAction)
      ).toEqual({
        loading: false,
        plansHomephone: mockPlanNBN5G4GItems,
      });
    });
  
    it("should handle GET_PLANS_HOMEPHONE_FAILURE", () => {
      const getProducthpFailureAction = {
        type: GET_PLANS_HOMEPHONE_FAILURE,
        payload: "Error message",
      };
      expect(
        gethomephonePlansReducer({ plansHomephone: [] }, getProducthpFailureAction)
      ).toEqual({
        loading: false,
        error: "Error message",
      });
    });
  });