import React from "react";
import styles from "./Row.module.scss";
import cn from "classnames";

type RowProps = {
  className?: string;
  children: React.ReactNode;
};

const Row = ({ children, className }: RowProps) => (
  <div className={cn(styles.row, className)}>{children}</div>
);

export default Row;
