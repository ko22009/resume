import type { NextPage } from "next";
import Head from "next/head";
import Text from "../components/Text";
import Image from "next/image";
import avatar from "../public/avatar.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Kutliakhmetov Ruslan</title>
        <meta name="description" content="Portfolio Kutliakhmetov Ruslan" />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text type="title">Kutliakhmetov Ruslan, front-end developer React</Text>
      При возможности могу быть тимлидом.
      <br /> <b>Английский</b>: B2 (Средне-продвинутый), разговорный английский.
      <br /> <b>Место фактического проживания</b>: Курган
      <Text type="subtitle">Образование</Text>
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "200px",
          overflow: "hidden",
        }}
      >
        <Image src={avatar} alt="Kutliakhmetov Ruslan" />
      </div>
    </div>
  );
};

export default Home;
