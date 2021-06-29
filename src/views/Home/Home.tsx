import React from 'react';
import { useStyles } from "./Home.style";
import Header from "../../Component/Header/Header"

const Home = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div>
        <p>Contents Home page</p>
      </div>
    </div>
  );
};
export default Home;