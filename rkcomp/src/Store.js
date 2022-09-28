import { createStore } from "redux"
import { rootReducer } from "./reducer/rootreducer.js"

export const Store = createStore(rootReducer)