import React from 'react';

const Detail = () => {
  return (
    <div className="workout-detail">
      <table>
        <thead>
          <tr>
            <th>Monday</th>
          </tr>
          <tr>
            <th>Workout</th>
            <th>Load</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flat Bench Press</td>
            <td>40</td>
            <td>4</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
