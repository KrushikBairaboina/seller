
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from'redux-devtools-extension';
import thunk from 'redux-thunk';
import { addProductReducer, editProductReducer, getProductsReducer } from './reducers/productReducer';
import { editOrderReducer, getOrdersReducer } from './reducers/ordersReducer';
import { getDeliveryReducer } from './reducers/deliveryReducer';
import { getUserReducer } from './reducers/userReducer';
import { editSellerReducer } from './reducers/sellerReducer';
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getOrders: getOrdersReducer,
    getDelivery: getDeliveryReducer,
    getUser: getUserReducer,
    addProduct:addProductReducer,
    editProduct:editProductReducer,
    editOrder:editOrderReducer,
    editSeller:editSellerReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store;