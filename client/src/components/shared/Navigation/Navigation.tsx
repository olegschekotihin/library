import React from 'react';
import { connect } from 'react-redux';
import { NavigationList } from './NavigationList';
import { NAVIGATION_LINK_LIST } from '../../../const';

interface NavigationValues {
  loggedIn: boolean;
}

/**
 * Component for showing navigation
 *
 * @constructor
 */

function Navigation({ loggedIn }: NavigationValues) {
  const {
    LOGGED_LINK_LIST,
    LINK_LIST,
  } = NAVIGATION_LINK_LIST;

  const linkData = loggedIn ? LOGGED_LINK_LIST : LINK_LIST;

  return (
    <NavigationList
      data={linkData}
    />
  );
}

const mapStateToProps = (state: any) => ({
  loggedIn: state.users.loggedIn,
});

export default connect(mapStateToProps)(Navigation);
