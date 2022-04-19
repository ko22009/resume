import utils from "@styles/utils.module.scss";
import Col from "../Col";
import Text from "../Text";
import Row from "../Row";
import styles from "./Contacts.module.scss";
import cn from "classnames";

const Contacts = () => (
  <Row className={cn(styles.container)}>
    <Col>
      <Text type="subtitle">Address</Text>
      <Text>Kurgan</Text>
    </Col>
    <Col>
      <Text type="subtitle">Phone</Text>
      <Text>+7 (922) 710-78-27</Text>
    </Col>
    <Col>
      <Text type="subtitle">Email</Text>
      <Text>kosid2@gmail.com</Text>
    </Col>
  </Row>
);

export default Contacts;
