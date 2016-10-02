import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import AccountUser from 'material-ui/svg-icons/action/account-circle';
import { palette } from 'styles/muiTheme';
import RoleItem from './RoleItem';
import LoadingSpinner from 'components/LoadingSpinner';

const iconStyles = {
  width: '2rem',
  height: '2rem',
};

const AccountButton = () => (
  <IconButton iconStyle={iconStyles}>
    <AccountUser
      color={palette.primary3Color}
      hoverColor={palette.alternateTextColor}
    />
  </IconButton>
);

export const RoleSwitcher = ({ users, login, createUser }) => (
  users
  ? <IconMenu
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    iconButtonElement={AccountButton()}
  >
    {users.map((user, key) => (
      <RoleItem
        key={key}
        user={user}
        roleAction={login}
      />
    ))}
    <RoleItem roleAction={createUser} />
  </IconMenu>
  : <div><LoadingSpinner color={palette.primary3Color}/></div>
);

RoleSwitcher.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    role: React.PropTypes.string.isRequired,
    location: React.PropTypes.string,
    loggedIn: React.PropTypes.bool,
  }).isRequired),
  login: React.PropTypes.func.isRequired,
  createUser: React.PropTypes.func.isRequired,
};

export default RoleSwitcher;
