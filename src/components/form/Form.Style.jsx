import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
`;

export const InputFields = styled.div`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 3rem;
`;

export const FormHeading = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
`;

export const FormSubHeading = styled.p`
  font-size: 1.8rem;
  font-weight: var(--font-weight-xthin);
`;
