import styles from "./Text.module.scss";
import React from "react";

type TextType = "title" | "subtitle" | "main";

type TextProps = {
  children: React.ReactNode;
  type: TextType;
};

const Text = ({ children, type }: TextProps) => (
  <div className={styles[type]}>{children}</div>
);

export default Text;
