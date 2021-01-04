import React, { Component } from "react";

import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSidebar: true,
  };

  closeSidebar = () => {
    this.setState({ showSidebar: false });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        {this.state.showSidebar && (
          <SideDrawer closeSidebar={this.closeSidebar} />
        )}
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
