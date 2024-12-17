import React from "react";

import Accordion from "react-bootstrap/Accordion";
function FakeStoreAPI(props) {
  return (

    <>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header> {props.data.category} </Accordion.Header>

          <Accordion.Body>
            <img
              src={props.data.image}
              alt=""
              width="200px"
              height="200px"
            ></img>
          </Accordion.Body>
          <Accordion.Body> {props.data.title} </Accordion.Body>
          <Accordion.Body>
            <strong style={{ fontFamily: "calibri" }}>
              Product Description:{" "}
            </strong>{" "}
            {props.data.description}
          </Accordion.Body>
          <Accordion.Body>
            <strong>₹</strong> {props.data.price}
          </Accordion.Body>
          <Accordion.Body>
            <strong style={{ fontFamily: "calibri" }}>Rating: </strong>{" "}
            {props.data.rating.rate}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default FakeStoreAPI;
