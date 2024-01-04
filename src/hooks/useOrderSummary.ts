import { useContext, useMemo } from "react";
import { OrderContext } from "../contexts/OrderContext";

export function UseOrderSummary() {
    const { cart } = useContext(OrderContext);

    const orderSummary = useMemo(() => {

        const deliveryPrice = 3.5;

        return cart.reduce((acc, cart) => {
            const cartItemValue = (cart.product.price * cart.quantity);

            acc.subtotal += cartItemValue;
            acc.total += cartItemValue;
            return acc;
        }, {
            subtotal: 0,
            delivery: cart.length !== 0 ? deliveryPrice : 0,
            total: cart.length !== 0 ? deliveryPrice : 0,
        })
    }, [cart]);

    return orderSummary;

}