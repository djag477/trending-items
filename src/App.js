import { cleanText } from "./utils/data"; //same csv string after removing new lines ("\n") in the middle of strings
import { useState, useEffect } from "react";
import { parser, dataStandardizer, dataAggregator } from "./utils/functions"; // functions used in the useEffect blocks to set the state for the data to be rendered
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Displayer from "./components/Displayer";

function App() {
  const [data, setData] = useState([]);
  const [trenders, setTrenders] = useState([]);

  useEffect(() => {
    /* Produces an array of objects where each header is used as a key for the values of the different records
    and it's set to the data state */
    const parsedData = parser(cleanText);
    setData(parsedData);

    /* The empty dependency array prevents an infinite loop */
  }, []);

  useEffect(() => {
    /* Adds two new keys to the data above: 
    Repl (an umbrella term to go around the naming issue in the Model column) 
    & Picture (a local .webp file to add images to the components) */
    const standardizedData = dataStandardizer(data);

    /* Produces a new array of arrays with, each of them including: Repl, Repl's occurances, Repl's picture */
    const aggregatedData = dataAggregator(standardizedData);

    /* Takes the top 3 arrays of the previous one, after sorting it from most occurances to least 
    then sets the output as state for the "trending bicycles" that have to be rendered */
    const trending = aggregatedData
      .sort((a, b) => (a[1] < b[1] ? 1 : -1))
      .slice(0, 3);

    setTrenders(trending);

    /* The first data state is set as dependency to update trenders in case there's new data */
  }, [data]);

  /*   // You can visualize the state values on the console
  console.log("this is the STATE data", data);
  console.log("this is the STATE trenders", trenders) */

  return (
    <div data-testid="test-0">
      <NavigationBar />
      <Displayer trenders={trenders} />{" "}
      {/* Props are drilled into the card components displayed in this component, which could end up displaying more items if necessary */}
    </div>
  );
}

export default App;
