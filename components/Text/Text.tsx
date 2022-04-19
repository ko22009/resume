import styles from "./Text.module.scss";
import React from "react";
import { Property } from "csstype";
import cn from "classnames";

type TextType = "header" | "subheader" | "title" | "subtitle" | "caption";

type TextProps = {
  className?: string;
  children: React.ReactNode;
  type?: TextType;
  textAlign?: Property.TextAlign;
};

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ children, type, textAlign, className }, ref) => (
    <div
      ref={ref}
      className={cn(type && styles[type], className)}
      style={{ textAlign }}
    >
      {children}
    </div>
  )
);

Text.displayName = "Text";

export default Text;
