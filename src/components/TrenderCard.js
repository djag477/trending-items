import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const TrenderCard = ({ elem }) => {
  /* elem[0] is the name of the bicycle */
  /* elem[2] is the picture of the bicycle */

  return (
    <Card
      style={{
        display: "grid",
        gridTemplateColumns: "25% auto 25%",
        gridTemplateRows: "75% auto",
      }}
      data-testid="test-3"
    >
      <img
        style={{
          padding: "5%",
          maxHeight: "15rem",
          maxWidth: "15rem",
          gridColumn: "2",
          justifySelf: "center",
        }}
        alt={elem[0]}
        src={require(`../../src/pictures/${elem[2]}`)}
      />
      <CardBody
        style={{
          boxSizing: "border-box",
          gridColumn: 2,
          gridRow: 2,
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifySelf: "center",
        }}
      >
        <CardTitle
          tag="h5"
          style={{ fontWeight: "bold", justifySelf: "center" }}
        >
          {elem[0]}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default TrenderCard;
