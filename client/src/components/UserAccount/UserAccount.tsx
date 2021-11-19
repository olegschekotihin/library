import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '../shared/Button';
import { logOut } from '../../store/actions/userActions';

type dispatchValues = {
  dispatch: () => () => void,
}

interface UserAccountValues {
  loggedIn: boolean;
  users: any;
  logOut: () => void;
}

/**
 * Component for showing user account information
 *
 * @param loggedIn
 * @param logOut
 * @param users
 * @constructor
 */

function UserAccount({ loggedIn, logOut, users }: UserAccountValues) {
  const { t } = useTranslation();
  const history = useHistory();

  const onLogout = () => {
    logOut();
    history.push('/login');
  };

  return (
    <div>
      <p>{users.user.email}</p>
      { loggedIn && (
        <Button
          onClick={onLogout}
          value={t('form-content.logout')}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  loggedIn: state.users.loggedIn,
});

const mapDispatchToProps = (dispatch: dispatchValues) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
