import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
import NavigationBar from "../NavigationBar";
import Displayer from "../Displayer";
import TrenderCard from "../TrenderCard";

afterEach(() => cleanup());

describe("Components are rendering", () => {
  test("should render the App component", () => {
    render(<App />);
    const appElement = screen.getByTestId("test-0");
    expect(appElement).toBeInTheDocument();
  });
  test("should render the NavigationBar component", () => {
    render(<NavigationBar />);
    const appElement = screen.getByTestId("test-1");
    expect(appElement).toBeInTheDocument();
  });
  test("should render the displayer component", () => {
    const trenders = [
      ["EC 5", 4, "../../src/pictures/ec.webp"],
      ["Beryll", 3, "../../src/pictures/beryll.webp"],
      ["Dirt Drifter 3000", 2, "dirtdrifter.webp"],
    ];
    render(<Displayer trenders={trenders} />);
    const appElement = screen.getByTestId("test-2");
    expect(appElement).toBeInTheDocument();
  });
  test("should render the TrenderCard component", () => {
    const elem = ["EC 5", 4, "../../src/pictures/ec.webp"];
    render(<TrenderCard elem={elem} />);
    const appElement = screen.getByTestId("test-3");
    expect(appElement).toBeInTheDocument("test-3");
  });
});
