import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      maxWidth: "80vw",
      display: "flex",
      flexDirection: "column",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 20
    },
    topHeader: {
      display: "flex",
      justifyContent: "space-between",
    },
    botHeader: {
      borderTop: "1px solid #c5c5c5",
      borderBottom: "1px solid #c5c5c5",
      marginTop: 20,
      padding: 15
    },
    txtLogo: {
      color: "#eaad6c",
      fontWeight: 800,
      fontSize: 41,
      "&> span": {
        color: "black"
      }
    },
    txtHeader: {
      color: "#333333",
      fontWeight: 600,
      "&:hover": {
        color: "#eaad6c",
      },
      cursor: "pointer"
    }
  }),
  { index: 1 }
);
