import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import { rootReducer } from "./reducers/rootreducer";
import { cartCounter } from "./middleWare/cartCounter";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)));

export default store;
