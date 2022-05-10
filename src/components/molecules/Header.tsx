import { Component } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Link,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

type HeaderProps = {
  classes: any;
  toggleMenu: () => void;
};

class Header extends Component<HeaderProps> {
  state = {
    navSearchOpen: false,
  };

  render() {
    const { classes, toggleMenu } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleMenu}
            className={classes.appBarMenuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.appBarTitle}>
            Xebia Coding Test
          </Typography>

          <Link
            href="https://github.com/rodrigocuriel21/xebia_coding_test"
            target="_blank"
            color="inherit"
          >
            Go to Code
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
