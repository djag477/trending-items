import React from "react";
import {Card, CardBody, CardTitle} from 'reactstrap'

const TrenderCard = ({elem}) => {
    const image = elem[2]

    return (
      <Card
        style={{
          display: "grid",
          gridTemplateColumns: "25% auto 25%",
          gridTemplateRows: "75% auto",
        }}
        data-testid = "test-3"
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
          src={require(`../../src/pictures/${image}`)}
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

