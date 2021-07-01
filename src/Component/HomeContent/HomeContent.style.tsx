import { makeStyles, fade } from "@material-ui/core/styles";

const URL_IMAGE = "https://demo.joomlashine.com/joomla-templates/jsn_bookstore/pro/novelist/images/joomlashine/sample/homepage/photo-1518306965192-44da60abb26f%201.png";

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    firstContent: {
      background: `url(${URL_IMAGE}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: 590,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40
    },
    mainContentCard: {
      background: "#dda96d99",
      width: "598px",
      height: "301px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "#ffff",
      padding: "30px 60px",
    },
    txtTitle: {
      fontSize: 28,
      color: "#ffff",
      marginBottom: 20
    },
    search: {
      marginTop: 45,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    txtContent: {
      display: "flex",
      alignItems: "center",
      padding: "1rem 0px",
      position: "relative",
      width: "80vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
    txtTop10: {
      "&::before": {
        content: '""',
        width: "100%",
        borderTop: "1px solid #c5c5c5",
        marginRight: 10
      },
      "&::after": {
        content: '""',
        width: "100%",
        borderTop: "1px solid #c5c5c5",
        marginLeft: 10
      },
      alignItems: "center",
      display: "flex",
      width: "100%",
      whiteSpace: "nowrap",
      fontSize: 20,
      fontWeight: 600,
    },
    listBooksContent: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    listBook: {
      maxWidth: "80vw",
      marginTop: 15
    },
    cardContent: {
      background: "#f5f5f5",
      height: 437,
      width: 262,
      "&:hover": {
        boxShadow: "0px 0px 7px 1px #c5c5c5",
      },
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "auto",
    },
    imgCard: {
      display: "flex",
      width: "100%",
      height: "73%",
      overflow: "hidden"
    },
    descCard: {
      height: "27%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    txtBookTitle: {
      fontSize: 17
    },
    txtPrice: {
      fontSize: 14,
      marginBottom: 10
    }
  }),
  { index: 1 }
);
