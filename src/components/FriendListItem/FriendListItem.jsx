import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { Status, Avatar, Name } from './FriendListItem.styled';
import { theme } from 'constants';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      as="li"
      display="flex"
      justifyContent="left"
      alignItems="center"
      gridGap={4}
      minWidth="friendBox"
      padding={4}
      boxShadow="primary"
      bg="bgPrimary"
    >
      <Status isOnline={isOnline}></Status>
      <Avatar
        src={avatar}
        alt="User avatar"
        width={theme.sizes.friendListAvatar}
      />
      <Name>{name}</Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
