import type { NextPage } from "next";
import Head from "next/head";
import Text from "../components/Text";
import avatar from "../public/avatar.jpg";
import Avatar from "../components/Avatar";
import utils from "../styles/utils.module.scss";
import Delimiter from "../components/Delimiter";
import Contacts from "../components/Contacts";
import Table from "../components/Table";
import education from "../data/education.json";
import experience from "../data/experience.json";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Kutliakhmetov Ruslan</title>
        <meta name="description" content="Portfolio Kutliakhmetov Ruslan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Avatar
        className={utils.mb16}
        url={avatar.src}
        alt="Kutliakhmetov Ruslan"
      />
      <Text type="header" textAlign="center">
        Kutliakhmetov Ruslan, 28&nbsp;years
      </Text>
      <Text type="subheader" textAlign="center">
        front-end developer React
      </Text>
      <Contacts />
      <Delimiter />
      <Text type="title">Profile</Text>
      <Text>
        Graphic designer with +8 years of experience in branding and print
        design. Skilled at Adobe Creative Suite (Photoshop, Illustrator,
        InDesign) as well as sketching and hand drawing. Supervised 23 print
        design projects that resulted in an increase of 32% in savings.
      </Text>
      <Delimiter />
      <Table data={education} title="Образование" />
      <Table data={experience} title="Опыт работы" />
    </div>
  );
};

export default Home;
