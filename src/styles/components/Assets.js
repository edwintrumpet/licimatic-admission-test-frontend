import styled from 'styled-components';

export default styled.svg`
  fill: ${(props) => (props.scraping ? '#8f8f8f' : 'yellowgreen')};
  width: 50%;
  height: 100%;
  @media (min-width: 415px) {
    width: 100%;
    height: auto;
    margin: 16px 0;
  }
`;
