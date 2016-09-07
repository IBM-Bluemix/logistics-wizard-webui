import React from 'react';
import Footer from './Footer/Footer';
import classes from './LandingPage.scss';

export const LandingPage = (props) => (
  <div className={classes.footer}>
    <h1>LandingPage</h1>
    <h2>Prop: {props.customProp || 'no prop given.'}</h2>
    <button onClick={props.clicky}>Clicky</button>

    <Footer />
  </div>
);

LandingPage.propTypes = {
  customProp: React.PropTypes.string,
  clicky: React.PropTypes.func.isRequired,
};

export default LandingPage;
