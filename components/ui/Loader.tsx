import React, { ReactElement } from "react";
import style from "../styles/loader.module.css";
interface Props {}

export default function Loader({}: Props): ReactElement {
  return <span className={style.loader}></span>;
}
