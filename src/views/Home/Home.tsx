import React from 'react';
import { useStyles } from "./Home.style";
import Header from "../../Component/Header/Header";
import HomeContainer from "../../Component/HomeContainer/HomeContainer";

const Home = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <HomeContainer />
    </div>
  );
};
export default Home;