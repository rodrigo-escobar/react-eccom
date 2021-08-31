import CartActionTypes from './cart.types';
import CartACtionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartACtionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartACtionTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartACtionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});
