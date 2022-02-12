import { fireEvent, render, screen } from "@testing-library/react";
import FixedNavBar from "..";
import { MemoryRouter } from "react-router-dom";
// pay attention to write it at the top level of your file
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Render NavBar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <FixedNavBar />
      </MemoryRouter>
    );
  });

  it("Should render NavLink pages", () => {
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(
      screen.getByText("Home Internet & nbn™")
    ).toBeInTheDocument();
    expect(screen.getByText("shop")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("Prepaid")).toBeInTheDocument();
    expect(screen.getByText("5G")).toBeInTheDocument();
    expect(screen.getByText("Homephone")).toBeInTheDocument();
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    expect(screen.getByText("LivingNetwork")).toBeInTheDocument();
    expect(screen.getByText("Extra")).toBeInTheDocument();
    expect(screen.getByText("HelpandSupport")).toBeInTheDocument();
    expect(screen.getByText("Deals")).toBeInTheDocument();
  });

  it("Should render the home page", () => {
    const homepage = screen.getByText("Home Internet & nbn™");
    fireEvent.click(homepage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });

  it("Should render the shop page", () => {
    const shoppage = screen.getByText("shop");
    fireEvent.click(shoppage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/shop");
  });
  it("Should render the mobile page", () => {
    const mobilepage = screen.getByText("Mobile");
    fireEvent.click(mobilepage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/mobile");
  });
  it("Should render the Prepaid page", () => {
    const prepaidpage = screen.getByText("Prepaid");
    fireEvent.click(prepaidpage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/prepaid");
  });

  it("Should render the 5G page", () => {
    const fivegpage = screen.getByText("5G");
    fireEvent.click(fivegpage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/5G");
  });
  it("Should render the Homephone page", () => {
    const homephonepage = screen.getByText("Homephone");
    fireEvent.click(homephonepage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/homephone");
  });

  it("Should render the Entertainment page", () => {
    const entertainmentpage = screen.getByText("Entertainment");
    fireEvent.click(entertainmentpage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/entertainment");
  });

  it("Should render the LivingNetwork page", () => {
    const livingnetworkpage = screen.getByText("LivingNetwork");
    fireEvent.click(livingnetworkpage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/livingnetwork");
  });

  it("Should render the Extra page", () => {
    const extrapage = screen.getByText("Extra");
    fireEvent.click(extrapage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/extra");
  });

  it("Should render the HelpandSupport page", () => {
    const helpandsupportpage = screen.getByText("HelpandSupport");
    fireEvent.click(helpandsupportpage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/helpandsupport");
  });

  it("Should render the Deals page", () => {
    const dealspage = screen.getByText("Deals");
    fireEvent.click(dealspage);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/deals");
  });
});
