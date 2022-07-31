import React from "react";
import { CardGroup } from "reactstrap";
import TrenderCard from "./TrenderCard";

const Displayer = ({ trenders }) => {
  return (
    <CardGroup data-testid="test-2">
      {trenders.map((elem, i) => {
        /* Maps through the final set of data to render the card elements and passes props to build them */
        return <TrenderCard key={i} elem={elem}></TrenderCard>;
      })}
    </CardGroup>
  );
};

export default Displayer;
