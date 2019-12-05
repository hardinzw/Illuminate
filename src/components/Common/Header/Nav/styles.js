import styled from 'styled-components';
import { tablet, monitor, mobile } from '../../../../styles/mediaQueries';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%
  overflow: hidden;
  fixed: top;
  
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
`;