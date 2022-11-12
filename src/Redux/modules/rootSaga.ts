import {all} from "redux-saga/effects";
import { authSage } from "./auth";

export default function* rootSaga() { // 제너레잍
  yield all([authSage()]);
}