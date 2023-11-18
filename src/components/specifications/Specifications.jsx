import React from 'react';

const TextComponent = () => {
  return (
    <div className="text-component">
      <h2>Title</h2>
      <textarea
        placeholder="Write your text here..."
        rows="6"
        cols="30"
      />
    </div>
  );
};

const TableComponent = () => {
  return (
    <div className="table-component">
      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1,1</td>
            <td>Data 1,2</td>
            <td>Data 1,3</td>
          </tr>
          <tr>
            <td>Data 2,1</td>
            <td>Data 2,2</td>
            <td>Data 2,3</td>
          </tr>
          <tr>
            <td>Data 3,1</td>
            <td>Data 3,2</td>
            <td>Data 3,3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div className="grid-container">
      <TextComponent />
      <TableComponent />
    </div>
  );
};

export default Specifications;
