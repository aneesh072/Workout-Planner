import React from 'react';

const WorkoutForm = ({ handleChange, handleSubmit, formData }) => {
  return (
    <div className="workout-form">
      <form onSubmit={handleSubmit}>
        <label>Day:</label>
        <select
          value={formData.day}
          name="day"
          onChange={handleChange}
          defaultValue="Monday"
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <label>Workout</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required="true"
        />

        <label>Load</label>
        <input
          type="text"
          name="load"
          value={formData.load}
          onChange={handleChange}
          required="true"
        />

        <label>Sets</label>
        <input
          type="text"
          name="sets"
          value={formData.sets}
          onChange={handleChange}
          required="true"
        />

        <label>Reps</label>
        <input
          type="text"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
          required="true"
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
