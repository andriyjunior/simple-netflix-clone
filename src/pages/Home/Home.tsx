import { InfoButton, MovieCard, PlayButton, Slider, Trailer } from 'components';
import { Modal } from 'components/organisms/Modal';
import { FC } from 'react';
import styled from 'styled-components';

interface IHomeProps {}

const StyledHome = styled.div`
  height: 300vh;
`;

const StyledSliders = styled.div`
  position: relative;
  top: -160px;
`;

export const Home: FC<IHomeProps> = () => {
  return (
    <StyledHome>
      <Trailer />
      <StyledSliders>
        <Slider title="Recent added" />
        <Slider title="New Films" />
        <Slider title="TV Shows" />
      </StyledSliders>
    </StyledHome>
  );
};
