import React from 'react';
import { Container } from '../styles/components/Navigation';
import RefreshIcon from '../assets/icons/Refresh';
import NotifiacionsIcon from '../assets/icons/Notifications';

function Navigation() {
  const handleClick = () => {
  };

  return (
    <Container>
      <RefreshIcon onClick={handleClick} />
      <NotifiacionsIcon />
    </Container>
  );
}

export default Navigation;
