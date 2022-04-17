import cn from "classnames";
import styles from "./Chip.module.scss";

type ChipProps = {
  text: string;
  active?: boolean;
};

const Chip = ({ text, active }: ChipProps) => {
  return (
    <div className={cn(styles.chip, { [styles.active]: active })}>{text}</div>
  );
};

export default Chip;
