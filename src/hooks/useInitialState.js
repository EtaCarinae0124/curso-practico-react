import React, { useState } from 'react';

const initialSate = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialSate);

    const addToCart = (payload) => {
        setState({
            ...state, 
            cart: [
                ...state.cart, 
                payload
            ],
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export { useInitialState };