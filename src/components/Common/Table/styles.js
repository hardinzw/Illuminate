import styled from 'styled-components';
import { tablet, monitor, mobile } from '../../../styles/mediaQueries';

export const Table = styled.table`

  width: 85%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: left; /* Change the text-alignment of table here */
  
  ${monitor} {
    width: 85%;
  }
  ${tablet} {
    width: 85%;
  }
  ${mobile} {
    width: 85%;
  }
`;

export const TableBody = styled.tbody`
background-color: ${({ theme }) => theme.background};
border-spacing: 0px;
border-collapse: collapse;
`

export const TableRow = styled.tr`
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid #ddd;
  padding: 5px;
  -moz-transition: background-color 300ms ease-in-out 0s;
  -ms-transition: background-color 300ms ease-in-out 0s;
  -o-transition: background-color 300ms ease-in-out 0s;
  -webkit-transition: background-color 300ms ease-in-out 0s;
  transition: background-color 300ms ease-in-out 0s;

  &:hover {
    background-color: #fff176;
  }

  ${monitor} {

  }
  ${tablet} {

  }
  ${mobile} {

  }
`;

export const TableHeader = styled.th`
  color: ${({ theme }) => theme.textSecondary};
  font-weight: bold;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${monitor} {

  }
  ${tablet} {

  }
  ${mobile} {

  }
`;

export const TableData = styled.td`
  color: ${({ theme }) => theme.textSecondary};
  padding: 10px;



  ${monitor} {

  }
  ${tablet} {
  }
  ${mobile} {

  }
`;
