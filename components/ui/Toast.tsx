"use  client";
import React, { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {}

export default function Toast({}: Props): ReactElement {
  return <ToastContainer></ToastContainer>;
}
