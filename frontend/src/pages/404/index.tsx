import React from 'react';
import {
  useLocation,
} from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  return (
    <div>
      <h3>Page not found!</h3>
      <p>
        No match for
        {' '}
        <span>{location.pathname}</span>
      </p>
    </div>
  );
};

export default PageNotFound;
