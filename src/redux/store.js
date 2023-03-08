import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers/rootreducer";
import { cartCounter } from "./middleWare/cartCounter";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(cartCounter, thunk)));

export default store;
