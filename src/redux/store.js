import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import { rootReducer } from "./reducers/rootreducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
