import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Status = styled.span`
  width: ${p => p.theme.sizes.statusBox};
  height: ${p => p.theme.sizes.statusBox};
  border-radius: ${p => p.theme.radii.circle};
  background-color: ${p =>
    p.isOnline
      ? p.theme.colors.bgStatusOnline
      : p.theme.colors.bgStatusOffline};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.friendListAvatar};
  height: ${p => p.theme.sizes.friendListAvatar};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.username};
  font-weight: bold;
  color: ${p => p.theme.colors.textAccent};
`;

Status.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};
