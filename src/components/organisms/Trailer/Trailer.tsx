import { InfoButton, PlayButton } from 'components';
import styled from 'styled-components';
import { colors } from 'styles';
import { StyledContainer } from 'templates';

import _mockMovies from '__mocks__/__mocks__.json';

const getRandomMovie = () => {
  return _mockMovies.data[Math.floor(Math.random() * 3)];
};

const StyledWrapper = styled.div<{ img: string }>`
  position: relative;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: none;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  min-height: 100vh;
  z-index: 0;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.32679009103641454) 48%,
      rgba(199, 76, 76, 0) 100%
    );
    z-index: -1;
  }
`;

const StyledBody = styled(StyledContainer)`
  padding-bottom: 200px;
`;

const StyledMovieName = styled.span`
  display: block;
  font-size: 100px;
  color: ${colors.white};
  text-transform: uppercase;
`;

const StyledMovieDescription = styled.span`
  display: block;
  max-width: 600px;
  font-size: 20px;
  color: ${colors.white};
  text-shadow: 2px 2px 2px ${colors.black};
`;

const StyledButtons = styled.div`
  padding-top: 32px;
  display: flex;
  gap: 8px;
`;

export const Trailer = () => {
  const data = getRandomMovie();

  return (
    <StyledWrapper img={data.img}>
      <StyledBody>
        <StyledMovieName>{data.name}</StyledMovieName>
        <StyledMovieDescription>{data.about}</StyledMovieDescription>
        <StyledButtons>
          <PlayButton url="#">Play</PlayButton>
          <InfoButton>See more</InfoButton>
        </StyledButtons>
      </StyledBody>
    </StyledWrapper>
  );
};
