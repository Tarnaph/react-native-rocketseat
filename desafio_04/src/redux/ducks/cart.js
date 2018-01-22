import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  cartAdd: ['product'],
  cartRemove: ['id'],
  cartUpdate: ['id', 'qty'],
  cartSubtotal: ['subtotal'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
  error: false,
  products: [],
  subtotal: 0,
};

/* Reducers */
export const add = (state, action) => ({
  ...state,
  products: [{
    data: {
      id: action.product.data.id,
      name: action.product.data.name,
      brand: action.product.data.brand,
      image: action.product.data.image,
      price: action.product.data.price,
    },
    cartProductId: action.product.cartProductId,
    qty: 1,
  },
  ...state.products,
  ],
});

export const remove = (state, action) => ({
  ...state,
  products: state.products.filter(product => product.cartProductId !== action.id),
});

export const update = (state, action) => ({
  ...state,
  products: state.products.map((product) => {
    if (product.cartProductId === action.id) {
      return { ...product, qty: action.qty };
    }
    return product;
  }),
});

export const subtotal = (state, action) => ({
  ...state,
  subtotal: action.subtotal,
});

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD]: add,
  [Types.CART_REMOVE]: remove,
  [Types.CART_UPDATE]: update,
  [Types.CART_SUBTOTAL]: subtotal,
});
