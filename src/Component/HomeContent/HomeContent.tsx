import React from 'react';
import { Typography, InputBase, Grid } from '@material-ui/core';
import { useStyles } from './HomeContent.style';
import SearchIcon from '@material-ui/icons/Search';
import Rating from '@material-ui/lab/Rating';
import product1 from "../../assets/books/product1.jpeg";
import product2 from "../../assets/books/product2.jpeg";
import product3 from "../../assets/books/product3.jpeg";
import product4 from "../../assets/books/product4.jpeg";

const HomeContent = () => {
  const classes = useStyles();

  const renderBooks = () => {
    return Array.from(Array(5)).map(() => {
      return [product1, product2, product3, product4].map((product: any) => {
        return (<Grid item xs={3}>
          <div className={classes.cardContent}>
            <div className={classes.imgCard}>
              <img src={product} alt="" />
            </div>
            <div className={classes.descCard}>
              <Typography className={classes.txtBookTitle}>
                Blowaway
              </Typography>
              <Typography className={classes.txtPrice}>
                29,000VND
              </Typography>
              <Rating defaultValue={3} />
            </div>
          </div>
        </Grid>)
      })
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.firstContent}>
        <div className={classes.mainContentCard}>
          <Typography className={classes.txtTitle} variant="h1">Welcome to GOODBOOKS!</Typography>
          <Typography>
            We stock more than 20 million titles for free delivery worldwide to over 170 countries.
            Here's where you can find an enjoyable shopping experience.
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
      </div>
      <div className={classes.listBooksContent}>
        <div className={classes.txtContent}>
          <Typography className={classes.txtTop10}>TOP GOODBOOKS</Typography>
        </div>
        <Grid className={classes.listBook} container spacing={4}>
          {renderBooks()}
        </Grid>
      </div>
    </div>
  );
};
export default HomeContent;