import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from "./Header.style";
import { MainCtx } from '../../context/main/state';
import { MainTabs } from '../constants';
import clsx from "clsx";

const Header = () => {
  const classes = useStyles();
  const { setCurrentTab, currentTab }: any = useContext(MainCtx);

  return (
    <div className={classes.root}>
      <div className={classes.topHeader}>
        <Typography className={classes.txtLogo} variant="h1">GOOD<span>BOOKS</span></Typography>
        <Typography>Login</Typography>
      </div>
      <div className={classes.botHeader}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography
              onClick={() => setCurrentTab(MainTabs.HOME)}
              className={clsx(classes.txtHeader, currentTab === MainTabs.HOME && classes.txtActive)}>
              HOME</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              onClick={() => setCurrentTab(MainTabs.BOOKS_LIST)}
              className={clsx(classes.txtHeader, currentTab === MainTabs.BOOKS_LIST && classes.txtActive)}>
              BOOK LISTS</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              onClick={() => setCurrentTab(MainTabs.ABOUT_US)}
              className={clsx(classes.txtHeader, currentTab === MainTabs.ABOUT_US && classes.txtActive)}>
              ABOUT US</Typography>
          </Grid>
        </Grid>

      </div>
    </div>
  );
};
export default Header;