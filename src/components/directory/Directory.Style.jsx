import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(min-content, 24rem) minmax(min-content, 32rem);
  gap: 0px 0px;
  grid-template-areas:
    'item1 item1 item2 item2 item3 item3'
    'item4 item4 item4 item5 item5 item5';
  justify-items: center;
  align-items: center;
  gap: 1.6rem;
`;
