import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import FiveG from "..";
// pay attention to write it at the top level of your file
const mockEmptyfivegProducts = {
  datafiveg: {
    plansfiveg: [],
  },
};
const mockStoreWithfivegproducts = {
  datafiveg: {
    plansfiveg: [
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

describe("render FiveG without product items", () => {
  it("should render header text", () => {
    render(
      <Provider store={createStore(() => mockEmptyfivegProducts)}>
        <MemoryRouter>
          <FiveG />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText("Step 2 - Choose your month to month plan")
    ).toBeInTheDocument();
  });
});

describe("render FiveG with product items", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithfivegproducts)}>
        <MemoryRouter>
          <FiveG />
        </MemoryRouter>
      </Provider>
    );
  });
  it("should render plan name text", () => {
    expect(
      screen.getByText(mockStoreWithfivegproducts.datafiveg.plansfiveg[0].name)
    ).toBeInTheDocument();
  });
  it("should render infinity image", () => {
    expect(
      screen.getAllByAltText("Unlimited Data Infinity")[0]
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
        `$${mockStoreWithfivegproducts.datafiveg.plansfiveg[0].cost.toFixed(2)}`
      )[0]
    ).toBeInTheDocument();
  });
  it("should render per month text", () => {
    expect(screen.getAllByText(`per month`)[0]).toBeInTheDocument();
  });
  it("should render Min cost  text", () => {
    expect(
      screen.getAllByText(
        `Min.cost is $${
          mockStoreWithfivegproducts.datafiveg.plansfiveg[0].cost + 252
        }`
      )[0]
    ).toBeInTheDocument();
  });

  it("should navigate configarator page when selectPlan btn click", () => {
    const navigate_plan = screen.getAllByText("Select Plan")[0];
    fireEvent.click(navigate_plan);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/configurator");
  });
});
