import styled from 'styled-components';

export const CategoryContainer = styled.div``;
export const Title = styled.div`
  letter-spacing: 10px;
  margin: 2rem 0;
  text-transform: uppercase;
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-auto-rows: minmax(35rem, 1fr);
  gap: 5rem 3rem;
`;
