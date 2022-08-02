import styled from 'styled-components';
import { colors } from 'styles';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.darkGrey};
  height: 400px;
`;

export const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};
