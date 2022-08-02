import { MovieCard } from 'components';
import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { colors, zIndexes } from 'styles';
import { StyledContainer } from 'templates';

import _mockMovies from '__mocks__/__mocks__.json';

const StyledRoot = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled.div`
  position: relative;
`;

const StyledSlides = styled.div<{ xPosition: number }>`
  display: flex;
  gap: 4px;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => `translateX(${220 * 6 * props.xPosition}px)`};
`;

const StyledTitle = styled.span`
  display: block;
  padding: 12px 0;
  color: ${colors.white};
  font-size: 20px;
`;

const StyledSliderButton = styled.div`
  position: absolute;
  top: 0;
  width: 60px;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.4;
  cursor: pointer;
  z-index: ${zIndexes.dropdown};

  &:hover {
    opacity: 0.2;
  }
`;

const StyledSliderLeftButton = styled(StyledSliderButton)`
  left: -60px;
`;

const StyledSliderRigthButton = styled(StyledSliderButton)`
  right: -60px;
`;

interface ISlider {
  title: string;
}

export const Slider: FC<ISlider> = ({ title }) => {
  const [xPosition, setXPosition] = useState(0);

  const handleNextSlide = useCallback(() => {
    setXPosition((prev) => prev + 1);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setXPosition((prev) => prev - 1);
  }, []);

  return (
    <StyledRoot>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSlider>
          <StyledSliderLeftButton onClick={handleNextSlide} />
          <StyledSlides xPosition={xPosition}>
            {_mockMovies.data.map((item) => {
              return <MovieCard key={`${item.name}_2`} img={item.img} />;
            })}
          </StyledSlides>
          <StyledSliderRigthButton onClick={handlePrevSlide} />
        </StyledSlider>
      </StyledContainer>
    </StyledRoot>
  );
};
