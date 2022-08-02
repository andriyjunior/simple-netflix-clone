import React, { FC, useState } from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
  min-width: 216px;
  height: 120px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

interface IMovieCard {
  img: string;
}

export const MovieCard: FC<IMovieCard> = ({ img }) => {
  const [isHover, setHover] = useState(false);
  console.log(isHover);

  return (
    <StyledRoot>
      <StyledImg
        src={img}
        alt="movie"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </StyledRoot>
  );
};
