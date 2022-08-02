import styled from 'styled-components';
import { colors } from 'styles';
import { colorConverter } from 'utils';

export const StyledButton = styled.button<{ hasIcon?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 0 16px;
  min-width: 200px;
  height: 44px;
  text-align: left;
  background-color: ${colorConverter.hexToRgba(colors.beta, 0.8)};
  color: ${colors.alpha};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
