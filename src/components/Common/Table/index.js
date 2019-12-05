import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { tableColorsLight } from '../../../styles/palette';
import { Table, TableBody, TableRow, TableHeader, TableData } from './styles';
import { ButtonInline } from '../Button';
import Button from '../Button';


class DataTable extends Component {
  render() {
    return (
      <ThemeProvider theme={tableColorsLight}>
        {/*Start Data Table */}
        <Table>
          <TableBody>
            {/*Start Table Header */}
            <TableRow>
              <TableHeader>
                ID
              </TableHeader>
              <TableHeader>
                Issue
              </TableHeader>
              <TableHeader>
                Created
              </TableHeader>
              <TableHeader>
                Reporter
              </TableHeader>
              <TableHeader>
                Severity
              </TableHeader>
              <TableHeader>
                Status
              </TableHeader>
            </TableRow>

            {/*Start Table Data*/}
            <TableRow>
              <TableData>
                Hello
              </TableData>
              <TableData>
                World
              </TableData>
              <TableData>
                Hello
              </TableData>
              <TableData>
                World
              </TableData>
              <TableData>
                Hello
              </TableData>
              <TableData>
                World
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </ThemeProvider>
    );
  };
};

export default DataTable;