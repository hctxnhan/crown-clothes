import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-rows: minmax(35rem, 1fr);
  gap: 2rem 3rem;
`;

export const Title = styled.h2`
  letter-spacing: 10px;
  margin: 2rem 0;
  text-transform: uppercase;
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;
