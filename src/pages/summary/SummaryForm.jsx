import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm({ setOrderPhase }) {
  const [tcChecked, setTcChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderPhase("completed");
  };

  const popover = (
    <Popover id="termsandconditions-popover">
      {/*<Popover.Context>No ice cream will actually be delivered</Popover.Context>*/}
      No ice cream will actually be delivered
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-condition">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
