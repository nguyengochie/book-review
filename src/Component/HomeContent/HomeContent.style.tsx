import { makeStyles } from "@material-ui/core/styles";

const URL_IMAGE = "https://demo.joomlashine.com/joomla-templates/jsn_bookstore/pro/novelist/images/joomlashine/sample/homepage/photo-1518306965192-44da60abb26f%201.png";

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    firstContent: {
      background: `url(${URL_IMAGE}) no-repeat center center fixed`,
      backgroundSize: "contain",
      width: "100vw",
      height: 590,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    },
    txtTitle: {
      fontSize: 40,
      color: "#ffff"
    }
  }),
  { index: 1 }
);
