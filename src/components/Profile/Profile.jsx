import PropTypes from 'prop-types';
import { formatNumber } from 'utils';
import { Box } from 'components/Box';
import { Avatar, Name, Info, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box boxShadow="primary">
      <Box padding={5} bg="bgPrimary">
        <Avatar src={avatar} alt="User avatar" width={120} height={120} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" as="ul">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={3}
          padding={4}
          bg="bgLight"
          borderTop="primary"
          borderRight="primary"
          as="li"
        >
          <Label>Followers</Label>
          <Quantity>{formatNumber(stats.followers)}</Quantity>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={3}
          padding={4}
          bg="bgLight"
          borderTop="primary"
          borderRight="primary"
          as="li"
        >
          <Label>Views</Label>
          <Quantity>{formatNumber(stats.views)}</Quantity>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridGap={3}
          padding={4}
          bg="bgLight"
          borderTop="primary"
          as="li"
        >
          <Label>Likes</Label>
          <Quantity>{formatNumber(stats.likes)}</Quantity>
        </Box>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
