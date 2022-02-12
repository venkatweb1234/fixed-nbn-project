import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import HomePhone from "..";
// pay attention to write it at the top level of your file
const mockEmptyhomephoneProducts = {
  datahomephone: {
    plansHomephone: [],
  },
};
const mockStoreWithhomephoneproducts = {
  datahomephone: {
    plansHomephone: [
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

describe("render HomePhone without product items", () => {
  it("should render header text", () => {
    render(
      <Provider store={createStore(() => mockEmptyhomephoneProducts)}>
        <MemoryRouter>
          <HomePhone />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText("Step 2 - Choose your month to month plan")
    ).toBeInTheDocument();
  });
});

describe("render HomePhone with product items", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(() => mockStoreWithhomephoneproducts)}>
        <MemoryRouter>
          <HomePhone />
        </MemoryRouter>
      </Provider>
    );
  });
  it("should render plan name text", () => {
    expect(
      screen.getByText(mockStoreWithhomephoneproducts.datahomephone.plansHomephone[0].name)
    ).toBeInTheDocument();
  });
  it("should render infinity image", () => {
    expect(screen.getAllByAltText("Unlimited Data Infinity")[0]).toBeInTheDocument();
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
        `$${mockStoreWithhomephoneproducts.datahomephone.plansHomephone[0].cost.toFixed(2)}`
      )[0]
    ).toBeInTheDocument();
  });
  it("should render per month text", () => {
    expect(screen.getAllByText(`per month`)[0]).toBeInTheDocument();
  });
  it("should render Min cost  text", () => {
    expect(
      screen.getAllByText(
        `Min.cost is $${mockStoreWithhomephoneproducts.datahomephone.plansHomephone[0].cost + 252}`
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
