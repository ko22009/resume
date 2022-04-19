import Col from "../Col";
import Text from "../Text";
import Row from "../Row";
import styles from "./Contacts.module.scss";
import cn from "classnames";
import Link from "next/link";

const Contacts = () => (
  <Row className={cn(styles.container)}>
    <Col>
      <Text type="subtitle">Telegram</Text>
      <Link href="https://t.me/ko22009">
        <a href="https://t.me/ko22009">https://t.me/ko22009</a>
      </Link>
    </Col>
    <Col>
      <Text type="subtitle">Phone</Text>
      <Link href="tel:+79227107827">
        <a href="tel:+79227107827">+7 (922) 710-78-27</a>
      </Link>
    </Col>
    <Col>
      <Text type="subtitle">Email</Text>
      <Link href="mailto:ko22009@yandex.ru">
        <a href="mailto:ko22009@yandex.ru">ko22009@yandex.ru</a>
      </Link>
    </Col>
    <Col>
      <Text type="subtitle">GitHub</Text>
      <Link href="https://github.com/ko22009">
        <a href="https://github.com/ko22009">https://github.com/ko22009</a>
      </Link>
    </Col>
  </Row>
);

export default Contacts;
