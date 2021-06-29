import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from "./Header.style";

const Header = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topHeader}>
        <Typography className={classes.txtLogo} variant="h1">GOOD<span>BOOKS</span></Typography>
        <Typography>Login</Typography>
      </div>
      <div className={classes.botHeader}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography className={classes.txtHeader} >HOME</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.txtHeader} >BOOK LISTS</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.txtHeader} >CONTACT</Typography>
          </Grid>
        </Grid>

      </div>
    </div>
  );
};
export default Header;