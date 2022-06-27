import { createStore} from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
        )

export default store;