import { FC } from 'react';
import styled from 'styled-components';
import { IoPlaySharp } from 'react-icons/io5';
import { colors } from 'styles';
import { colorConverter } from 'utils';
import { StyledButton } from 'components';
import { Link } from 'react-router-dom';

export const StyledPlayButton = styled(StyledButton)`
  background-color: ${colorConverter.hexToRgba(colors.white, 0.9)};
  color: ${colors.black};

  &:hover {
    background-color: ${colorConverter.hexToRgba(colors.white, 0.8)};
  }
`;

interface IPlayButton {
  children: string;
  url: string;
}

export const PlayButton: FC<IPlayButton> = ({ children, url }) => {
  return (
    <Link to="/">
      <StyledPlayButton data-testid="PlayButton" hasIcon>
        <IoPlaySharp size={24} />

        {children}
      </StyledPlayButton>
    </Link>
  );
};
