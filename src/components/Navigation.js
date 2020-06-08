import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from '../styles/components/Navigation';
import RefreshIcon from '../assets/icons/Refresh';
import constants from '../utils/constants';
import { startScraping } from '../redux/actions';

function Navigation(props) {
  const { scraping } = props;
  const handleClick = async () => {
    await fetch(`${constants.API}/scraping`);
    props.startScraping();
  };

  return (
    <Container>
      <RefreshIcon onClick={handleClick} scraping={scraping} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  scraping: state.scraping,
});

const mapDispatchToProps = {
  startScraping,
};

Navigation.propTypes = {
  scraping: PropTypes.bool.isRequired,
  startScraping: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
