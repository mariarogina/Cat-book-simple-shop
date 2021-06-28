import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";

export default function GlobalState(props) {
  const products = [
    {
      id: 0,
      title: "10 Facts about Kittens",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/41jtMtbu2zL._SX322_BO1,204,203,200_.jpg",
      price: 10,
    },
    {
      id: 1,
      title: "Learn About Cats",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/41Okzno2yPS._SX331_BO1,204,203,200_.jpg",
      price: 8,
    },
    {
      id: 2,
      title: "Cat Warriors #1",
      imageURL:
      "https://m.media-amazon.com/images/I/51rWn7uxORL.jpg",
      price: 11.85,
    },
    {
      id: 3,
      title:"Cat Warriors #2" ,
      imageURL:
      "https://m.media-amazon.com/images/I/51J5u+g5JFL.jpg",
      price: 11.85,
    },
    {
      id: 4,
      title: "Cat Warriors #3",
      imageURL:
        "https://m.media-amazon.com/images/I/51tT95Blr3L._SY346_.jpg",
      price: 11.85,
    },
    {
      id: 5,
      title: "Cat Warriors #5",
      imageURL:
        "https://m.media-amazon.com/images/I/51d+GMfFvKL.jpg",
      price: 11.85,
    },
  ];

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
