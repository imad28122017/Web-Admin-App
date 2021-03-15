import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Account Details</th>
          <th>Service details</th>
          <th>Challan Amount (Rs)</th>
          <th>Due date</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Akram</td>
          <td>Khan</td>
          <td>@ak</td>
          <td>ISBN0192345678</td>
          <td>Charater Certificate</td>
          <td>1000.00</td>
          <td>Dec 10, 2020</td>
          <td>Paid</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Aslam</td>
          <td>Sami</td>
          <td>@as</td>
          <td>ISBN0192345678</td>
          <td>License Learner</td>
          <td>1500.00</td>
          <td>Dec 15, 2020</td>
          <td>Paid</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Naseem</td>
          <td>Shah</td>
          <td>@ns</td>
          <td>ISBN0192345678</td>
          <td>Certificate</td>
          <td>1000.00</td>
          <td>Dec 25, 2020</td>
          <td>Un Paid</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;