import styled from 'styled-components';
import { tablet, monitor, mobile } from '../../../styles/mediaQueries';

export const Wrapper = styled.div`
  background-color: gray;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding-bottom: 500px;
  
  ${monitor} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: white;
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  justify-content: center
  align-items: center;
  letter-spacing: 0.4px;
`;