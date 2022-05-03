import React from "react";
import { Table } from "semantic-ui-react";

export default () => {
  return (
    <div className="invoice">
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Invoice no</Table.HeaderCell>
            <Table.HeaderCell>Due Date</Table.HeaderCell>
            <Table.HeaderCell>Invoice Date</Table.HeaderCell>
            <Table.HeaderCell>Ammount</Table.HeaderCell>
            <Table.HeaderCell>Cleint Name</Table.HeaderCell>
            <Table.HeaderCell>Project Name</Table.HeaderCell>
            <Table.HeaderCell>Project ID</Table.HeaderCell>
            <Table.HeaderCell>Invoice Period</Table.HeaderCell>

            <Table.HeaderCell>Billing Cycle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>01-May,2021</Table.Cell>
            <Table.Cell>07-May,2021</Table.Cell>
            <Table.Cell>$23,45</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Eclecs</Table.Cell>
            <Table.Cell>1234</Table.Cell>
            <Table.Cell>21 to 02</Table.Cell>
            <Table.Cell>Monthly</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>21</Table.Cell>
            <Table.Cell>01-May,2021</Table.Cell>
            <Table.Cell>07-May,2021</Table.Cell>
            <Table.Cell>$23,45</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Eclecs</Table.Cell>
            <Table.Cell>1234</Table.Cell>
            <Table.Cell>21 to 02</Table.Cell>
            <Table.Cell>Monthly</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>16</Table.Cell>
            <Table.Cell>01-May,2021</Table.Cell>
            <Table.Cell>07-May,2021</Table.Cell>
            <Table.Cell>$23,45</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Eclecs</Table.Cell>
            <Table.Cell>1234</Table.Cell>
            <Table.Cell>21 to 02</Table.Cell>
            <Table.Cell>Monthly</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>65</Table.Cell>
            <Table.Cell>01-May,2021</Table.Cell>
            <Table.Cell>07-May,2021</Table.Cell>
            <Table.Cell>$23,45</Table.Cell>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Eclecs</Table.Cell>
            <Table.Cell>1234</Table.Cell>
            <Table.Cell>21 to 02</Table.Cell>
            <Table.Cell>Monthly</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
