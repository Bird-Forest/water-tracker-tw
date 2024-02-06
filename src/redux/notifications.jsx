export const NOTIFICATIONS = {
    SUCCESS: {
      AVATAR_UPDATED: 'Avatar updated successfully.',
      USER_UPDATED: 'User information updated successfully.',
    },
    FAILURE: {
      USER_CREATION: 'User creation error.',
      INVALID_DATA: 'Email or password is wrong.',
      NOT_FOUND: 'Not found.',
      EMAIL: 'Email is already in use.',
      SERVER: 'Server error.',
      LOGIN: 'Login error.',
      UNAUTHORIZED: 'Not authorized.',
      NO_FILE: 'File not found.',
      FETCHING_USER: 'Unable to fetch user.',
      USER_UPDATE: 'Error updating user information.',
      LOGOUT: 'Logout error.',
    },
    INFO: {
      WELCOME: 'Welcome to Tracker of Water!',
      LOGOUT: `We're going to miss you...`,
    },
};
  
export const paramsForNotify = {
    position: 'center-bottom',
    distance: '16px',
    timeout: 3000,
    width: '300px',
    fontSize: '16px',
    borderRadius: '10px',
    showOnlyTheLastOne: true,
    fontFamily: 'Montserrat',
    cssAnimationStyle: 'from-bottom',
    fontAwesomeIconSize: '20px',
};