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
import skills from "../data/skills.json";
import specifications from "../data/specifications.json";
import cn from "classnames";

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
        front-end React developer
      </Text>
      <Contacts />
      <Delimiter />
      <Text type="title">Немного о себе</Text>
      <i>При возможности могу быть тимлидом.</i>
      <Text>Английский – B2 (Средне-продвинутый), разговорный английский.</Text>
      <Text className={utils.mt6}>
        Честен. Смотрю на вещи реалистично, но сохраняю позитив. Обладаю
        определенным чувством юмора, помогаю ближнему. Толерантен. Не смотрю ТВ
        и стараюсь опосредоваться от политики; но понимаю: где верить, а где
        нет. Стремлюсь к лучшему пониманию себя и к совершенству себя как
        специалиста
      </Text>
      <Text className={cn(utils.mt6)} type="subtitle">
        Места:
      </Text>
      Родился в Пыть-Яхе, прожил там до 18 лет. <br />
      Затем учился и жил в Челябинске 7 лет. Проходил службу на дальнем востоке,
      «учебка» в Краснодаре.
      <br />
      Нахожусь в Кургане в настоящий момент, почти 2 года.
      <br />
      Города, в которых находился от недели до месяца: Москва, Санкт-Петербург,
      Екатеринбург, Сочи.
      <Text className={cn(utils.mt6)} type="subtitle">
        Активный образ жизни:
      </Text>
      <ul>
        <li>Поход на Таганай, на хребет Зюраткуль.</li>
        <li>Ездил в Аркаим за компанию.</li>
        <li>
          Занимался год лыжными гонками в школе, затем пару лет в университете.
        </li>
        <li>С октября 2021г. по настоящее время хожу в тренажерный зал.</li>
      </ul>
      <Delimiter />
      <Text type="title">Военный билет</Text>
      <Text>
        звание – <b>рядовой</b>
        <br />
        специальность – <b>кодировщик</b>
        <br />
        Проходил службу с 8 июля 2018г. по 8 июля 2019г.
      </Text>
      <Delimiter />
      <Text type="title">Ключевые навыки</Text>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <Delimiter />
      <Text type="title">Примерные проекты, под которые подойду:</Text>
      <ul>
        {specifications.map((specification) => (
          <li key={specification}>{specification}</li>
        ))}
      </ul>
      <Delimiter />
      <Table data={education} title="Образование" />
      <Delimiter />
      <Table data={experience} title="Опыт работы" />
    </div>
  );
};

export default Home;
