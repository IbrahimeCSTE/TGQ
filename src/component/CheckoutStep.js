import React from "react";

const CheckoutStep = (props) => {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? "active" : ""}>Personal</div>
      <div className={props.step2 ? "active" : ""}>Educational</div>
      <div className={props.step3 ? "active" : ""}>Social</div>
    </div>
  );
};

export default CheckoutStep;
