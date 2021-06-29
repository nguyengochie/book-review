import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HomeContent.style';

const HomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstContent}>
        <div className={classes.mainContentCard}>
          <Typography className={classes.txtTitle} variant="h1">Welcome to GOODBOOKS!</Typography>
          <Typography>
            We stock more than 20 million titles for free delivery worldwide to over 170 countries.
            Here's where you can find an enjoyable shopping experience.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default HomeContent;