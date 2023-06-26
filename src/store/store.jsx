import { configureStore } from "@reduxjs/toolkit";
import {  authReducer } from "../slice/auth";
import articleReducer from '../slice/article'
 export const store = configureStore({
   reducer: {
     authentication: authReducer,
     article:articleReducer
   },
 });