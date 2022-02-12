import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import HomeInternetNBN from "..";
// pay attention to write it at the top level of your file
const mockEmptynbnProducts = {
  data: {
    plans: [],
  },
};
const mockStoreWithnbnproducts = {
  data: {
    plans: [
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
    ],
  },
};
const mockedUseNavigate = jest.fn();
const mockedUseDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));
jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as any),
  useDispatch: () => mockedUseDispatch,
}));

describe("render NBN without product items", () => {
  it("should render header text", () => {
    render(
      <Provider store={createStore(() => mockEmptynbnProducts)}>
        <MemoryRouter>
          <HomeInternetNBN />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText("Step 2 - Choose your speed and month-to-month plan")
    ).toBeInTheDocument();
  });
});

describe("render NBN with product items", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithnbnproducts)}>
        <MemoryRouter>
          <HomeInternetNBN />
        </MemoryRouter>
      </Provider>
    );
  });
  it("should render plan name text", () => {
    expect(
      screen.getByText(mockStoreWithnbnproducts.data.plans[0].name)
    ).toBeInTheDocument();
  });
  it("should render infinity image", () => {
    expect(
      screen.getAllByAltText("Unlimited Data infinity")[0]
    ).toBeInTheDocument();
  });
  it("should render Unlimited Data text", () => {
    expect(screen.getAllByText("Unlimited Data")[0]).toBeInTheDocument();
  });
  it("should render Month-to-month plan text", () => {
    expect(screen.getAllByText("Month-to-month plan")[0]).toBeInTheDocument();
  });
  it("should render plan cost display", () => {
    expect(
      screen.getAllByText(
        `$${mockStoreWithnbnproducts.data.plans[0].cost.toFixed(2)}`
      )[0]
    ).toBeInTheDocument();
  });
  it("should render per month text", () => {
    expect(screen.getAllByText(`per month`)[0]).toBeInTheDocument();
  });
  it("should render Min cost  text", () => {
    expect(
      screen.getAllByText(
        `Min.cost is $${mockStoreWithnbnproducts.data.plans[0].cost + 252}`
      )[0]
    ).toBeInTheDocument();
  });

  it("should navigate configarator page when selectPlan btn click", () => {
    const navigate_plan = screen.getAllByText("Select Plan")[0];
    //expect(navigate_plan).toBeInTheDocument();
    fireEvent.click(navigate_plan);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/configurator");
  });
});
