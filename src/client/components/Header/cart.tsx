/* eslint-disable react/react-in-jsx-scope */
import { useCart } from "@helpdice/pro";
import React, { memo } from "react";

function Cart() {
    const { cartTotal, inCart, totalItems, items } = useCart();
    console.log(items);
    return (
        <></>
    )
}

export default memo(Cart);