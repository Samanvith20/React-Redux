import { Actiontypes } from "../Constants/action-types";

const initialState = {
  products: [
    {
      name: "Samanvith",
      id: 1,
      category: "student",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
