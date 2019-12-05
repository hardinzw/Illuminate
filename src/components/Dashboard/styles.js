import styled from 'styled-components';
import { tablet, monitor, mobile } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%
  overflow: hidden;
  padding-bottom: 200px;
  
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;
`;