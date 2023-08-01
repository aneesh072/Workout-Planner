import React from 'react';

const WorkoutForm = () => {
  return (
    <div className="workout-form">
      <form>
        <h3>Add a new workout</h3>
        <label>Day:</label>
        <select name="days" id="days">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <label>Workout</label>
        <input type="text" />

        <label>Load</label>
        <input type="text" />

        <label>Sets</label>
        <input type="text" />

        <label>Reps</label>
        <input type="text" />

        <button>Add</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
