import React from 'react';

const Detail = ({ workouts }) => {
  return (
    <div className="workout-detail">
      <table>
        <thead>
          <tr id="day">
            <th colSpan="4">Monday</th>
          </tr>
          <tr>
            <th>Workout</th>
            <th>Load</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, i) => (
            <tr key={i}>
              <td>{workout.title}</td>
              <td>{workout.load}</td>
              <td>{workout.sets}</td>
              <td>{workout.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
