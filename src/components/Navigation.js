import React, { useState } from 'react';
import { Container } from '../styles/components/Navigation';
import RefreshIcon from '../assets/icons/Refresh';
import NotifiacionsIcon from '../assets/icons/Notifications';

export default function Navigation() {
  const [refresh, setRefresh] = useState(false);
  const handleClick = () => {
    setRefresh(!refresh);
  };
  return (
    <Container>
      <RefreshIcon refresh={refresh} onClick={handleClick} />
      <NotifiacionsIcon />
    </Container>
  );
}
