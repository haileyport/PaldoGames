import React from "react";
import Field from "./Field";
import * as coupon from "./Coupon.style";

const Coupon = ({ numbers, select, ok }) => {
  const fields = numbers.map((number) => (
    <Field ok={ok} key={number} number={number} select={select} />
  ));

  return <coupon.CouponBox>{fields}</coupon.CouponBox>;
};

export default Coupon;
