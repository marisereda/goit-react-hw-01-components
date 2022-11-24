import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;

  border: 1px solid ${p => p.theme.colors.borderColor};
  border-radius: ${p => p.theme.radii.circle};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.userName};
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.colors.textAccent};
`;

export const Info = styled.p`
  color: ${p => p.theme.colors.textLight};
  text-align: center;

  &:nth-last-of-type(2) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.label};
  color: ${p => p.theme.colors.textLight};
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.numbers};
  font-weight: bold;
  color: ${p => p.theme.colors.textAccent};
`;
