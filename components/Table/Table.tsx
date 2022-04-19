import Text from "../Text";
import styles from "./Table.module.scss";
import utils from "../../styles/utils.module.scss";
import cn from "classnames";
import React from "react";

type Table = {
  date: string;
  title: string;
  description: string;
};

type TableProps = {
  title: string;
  data: Table[];
};

const Table = ({ data, title }: TableProps) => {
  return (
    <>
      <Text type="title" className={utils.mb0}>
        {title}
      </Text>
      <table>
        <tbody>
          {data.map((data, i) => (
            <tr key={i}>
              <td className={styles.date}>
                <Text className={cn(utils.pr12, utils.noWrap)} type="caption">
                  {data.date}
                </Text>
              </td>
              <td>
                <Text type="subtitle" className={utils.mt6}>
                  {data.title}
                </Text>
                <Text className={styles.dateSmall} type="caption">
                  {data.date}
                </Text>
                <Text>{data.description}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
