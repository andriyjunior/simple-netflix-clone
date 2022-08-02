import { Footer, Header } from 'components';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import bg from 'assets/bg.png';
import { colors } from 'styles';

const StyledBody = styled.div`
  position: relative;
  background-color: ${colors.darkGrey};
  min-height: 100vh;
  z-index: 0;
`;

interface ICommonLayout {
  children: ReactNode;
}

export const CommonTemplate: FC<ICommonLayout> = ({ children }) => {
  return (
    <>
      <StyledBody>
        <Header />
        {children}
      </StyledBody>
      <Footer />
    </>
  );
};
