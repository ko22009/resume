import styles from "./Col.module.scss";
import React from "react";

type ColProps = {
  children: React.ReactNode;
};

const Col = ({ children }: ColProps) => (
  <div className={styles.col}>{children}</div>
);

export default Col;
