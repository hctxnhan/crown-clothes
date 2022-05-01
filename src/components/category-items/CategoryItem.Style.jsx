import styled from 'styled-components';

export const Background = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-out;
  border: var(--border-thin);
`;

export const Content = styled.div`
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s linear;
  border: var(--border-thin);
  position: absolute;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.6rem;
  color: var(--text-color);
`;

export const Subtitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--text-color);
`;

export const CategoryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${Background} {
    transform: scale(1.1);
  }

  &:hover ${Content} {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:nth-child(1) {
    grid-area: item1;
  }
  &:nth-child(2) {
    grid-area: item2;
  }
  &:nth-child(3) {
    grid-area: item3;
  }
  &:nth-child(4) {
    grid-area: item4;
  }
  &:nth-child(5) {
    grid-area: item5;
  }
`;
