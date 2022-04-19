import styles from "./Text.module.scss";
import React from "react";
import { Property } from "csstype";
import cn from "classnames";

type TextType =
  | "header"
  | "subheader"
  | "title"
  | "subtitle"
  | "main"
  | "caption";

type TextProps = {
  className?: string;
  children: React.ReactNode;
  type?: TextType;
  textAlign?: Property.TextAlign;
};

const Text = ({ children, type = "main", textAlign, className }: TextProps) => (
  <div className={cn(styles[type], className)} style={{ textAlign }}>
    {children}
  </div>
);

export default Text;
