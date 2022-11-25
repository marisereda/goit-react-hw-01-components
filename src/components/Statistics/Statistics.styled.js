import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textAccent};
  background-color: ${p => p.theme.colors.bgPrimary};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.label};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.numbers};
`;
