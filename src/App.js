import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import constants from './utils/constants';
import { endScraping } from './redux/actions';

const socket = io(constants.API);

function App(props) {
  useEffect(() => {
    socket.on('scraped', (data) => {
      console.log(data);
      props.endScraping();
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <Navigation />
    </>
  );
}

const mapDispatchToProps = {
  endScraping,
};

App.propTypes = {
  endScraping: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
