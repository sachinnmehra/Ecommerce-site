import React, { Component } from "react";
import HomePage from "./Pages/Homepage/Homepage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInSignUpPage from "./Pages/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/reducers/userReducer/userAction";
import CheckoutPage from "./Pages/Checkout/Checkout";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/reducers/userReducer/userSelector";
class App extends Component {
  unsubscribeFromAuth = null; //for closing the subscription
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //method render when theres an change in auth state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //return user data which stored in firestore
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), //give all userData which stored at firestore,
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
