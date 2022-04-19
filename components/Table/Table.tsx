import Text from "../Text";
import styles from "./Table.module.scss";
import utils from "../../styles/utils.module.scss";
import cn from "classnames";

type Table = {
  date: string;
  title: string;
  description: string;
};

type TableProps = {
  title: string;
  data: Table[];
};

const Table = ({ data, title }: TableProps) => (
  <>
    <Text type="title">{title}</Text>
    {data.map((data) => (
      <div key={data.date} className={styles.container}>
        <div className={styles.item}>
          <Text type="subtitle" className={utils.mb6}>
            {data.title}
          </Text>
          <Text className={cn(styles.reverse, styles.date)} type="caption">
            {data.date}
          </Text>
          <Text className={cn(styles.text)}>{data.description}</Text>
        </div>
      </div>
    ))}
  </>
);

export default Table;
