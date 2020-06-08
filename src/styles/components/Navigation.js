import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content:  space-evenly;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 2px solid #8f8f8f;
  @media (min-width: 415px) {
    width: 80px;
    height: 100%;
    padding: 16px 0;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 2px solid #8f8f8f;
    border-top: none;
  } 
`;

export const Tmp = 'Temporal';
