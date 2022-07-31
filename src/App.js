import { cleanText } from "./utils/data";
import { useState, useEffect } from "react";
import { parser, dataStandardizer, dataAggregator } from "./utils/functions";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Displayer from "./components/Displayer";

function App() {
  const [data, setData] = useState([]);
  const [trenders, setTrenders] = useState([]);

  useEffect(() => {
    const parsedData = parser(cleanText);
    setData(parsedData);
  }, []);

  useEffect(() => {
    const standardizedData = dataStandardizer(data);

    const aggregatedData = dataAggregator(standardizedData)
    
    const trending = aggregatedData
      .sort((a, b) => (a[1] < b[1] ? 1 : -1))
      .slice(0,3)

    setTrenders(trending)
    
  }, [data]);
  
  console.log("this is the STATE data", data);
  console.log("this is the STATE trenders", trenders)
  
  return (
    <div data-testid='test-0'>
      <NavigationBar/>
      <Displayer trenders={trenders}/>
    </div>
  );
}

export default App;

