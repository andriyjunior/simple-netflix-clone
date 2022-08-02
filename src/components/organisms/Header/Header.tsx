import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { StyledContainer } from 'templates';
import { Switch } from 'components';
import { zIndexes } from 'styles';
import { routes } from 'const';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.beta};
  z-index: ${zIndexes.fixed};
`;

const StyledLinkWrapper = styled(StyledContainer)`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.alpha};
  width: 80px;

  &.active {
    font-weight: bold;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLinkWrapper>
        <StyledLink to={routes.home.path}>{routes.home.name}</StyledLink>
        <StyledLink to={routes.movies.path}> {routes.movies.name}</StyledLink>
        <StyledLink to={routes.tvShows.path}> {routes.tvShows.name}</StyledLink>
      </StyledLinkWrapper>
      <Switch />
    </StyledHeader>
  );
};
