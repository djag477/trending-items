import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
import NavigationBar from "../NavigationBar";
import Displayer from "../Displayer";
import TrenderCard from "../TrenderCard";
import {
  parser,
  dataStandardizer,
  dataAggregator,
} from "../../utils/functions.js";
import { cleanText } from "../../utils/data.js";
const parsedData = parser(cleanText);
const standardizedData = dataStandardizer(parsedData);
const aggregatedData = dataAggregator(standardizedData);
const trending = aggregatedData
  .sort((a, b) => (a[1] < b[1] ? 1 : -1))
  .slice(0, 3);

const aggregatedDataValues = aggregatedData.map((elem) => elem[1]);

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
    render(<Displayer trenders={trending} />);
    const appElement = screen.getByTestId("test-2");
    expect(appElement).toBeInTheDocument();
  });
  test("should render the TrenderCard component", () => {
    render(<TrenderCard elem={trending[0]} />);
    const appElement = screen.getByTestId("test-3");
    expect(appElement).toBeInTheDocument();
  });
});

describe("Component shows the actual top 3", () => {
  test("Is it the max count for the whole aggregated values?", () => {
    render(<Displayer trenders={trending} />);
    const value = trending[0][1];
    expect(value).toEqual(Math.max(...aggregatedDataValues));
  });
  test("Is the second position less than the 1st and greater than the 3rd?", () => {
    render(<Displayer trenders={trending} />);
    const value = trending[1][1];
    expect(value).toBeGreaterThan(trending[2][1]);
    expect(value).toBeLessThan(trending[0][1]);
  });
});
