import { FC } from 'react';
import styled from 'styled-components';
import { BiInfoCircle } from 'react-icons/bi';
import { colors } from 'styles';
import { colorConverter } from 'utils';
import { StyledButton } from 'components';

const StyledInfoButton = styled(StyledButton)`
  background-color: ${colorConverter.hexToRgba(colors.beta, 0.7)};
  color: ${colors.alpha};

  &:hover {
    background-color: ${colorConverter.hexToRgba(colors.beta, 0.4)};
  }

  &:disabled {
    background-color: ${colorConverter.hexToRgba(colors.beta, 0.7)};
  }
`;

interface IInfoButton {
  children: string;
}

export const InfoButton: FC<IInfoButton> = ({ children }) => {
  return (
    <StyledInfoButton data-testid="infoButton">
      <BiInfoCircle size={24} />
      {children}
    </StyledInfoButton>
  );
};
