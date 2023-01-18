import { legacy_createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'

const middleware=[logger,thunk];
export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));
export default {store}
;