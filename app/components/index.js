import React from "react";
import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    const store = configureStore();
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return  <Provider store={store}><Layout /></Provider>;

  }
}
