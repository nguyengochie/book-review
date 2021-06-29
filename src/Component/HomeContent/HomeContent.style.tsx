import { makeStyles } from "@material-ui/core/styles";
import imgHome from "../../assets/img/background_home.jpeg"

export const useStyles = makeStyles(
  (theme) => ({
    root: {

    },
    firstContent: {
      background: `url(${imgHome}) no-repeat center center fixed`
    }
  }),
  { index: 1 }
);
