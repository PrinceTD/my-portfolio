import React from 'react';

const TableEdu = () => {
    return (
        <div>
            <table class="table table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">Degree</th>
      <th scope="col">Board</th>
      <th scope="col">Group</th>
      <th scope="col">Year</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Honors</th>
      <td>National University</td>
      <td>Physics</td>
      <td>2019-20</td>
      <td>--</td>
    </tr>
    <tr>
      <th scope="row">HSC</th>
      <td>Sylhet Board</td>
      <td>Seience</td>
      <td>2018-19</td>
      <td>4.75</td>
    </tr>
    <tr>
      <th scope="row">SSC</th>
      <td>Sylhet Board</td>
      <td>Seience</td>
      <td>2016-17</td>
      <td>5.00</td>
    </tr>
   
  </tbody>
</table>
        </div>
    );
};

export default TableEdu;