import React from 'react';
import NavigationList from './NavigationList';

const Navigation = () => {
  const linkList = [
    { path: '/', name: 'Home' },
    { path: '/authors', name: 'Authors' },
    { path: '/books', name: 'Books' },
  ];
  return (
    <NavigationList
      data={linkList}
    />
  );
};

export default Navigation;
