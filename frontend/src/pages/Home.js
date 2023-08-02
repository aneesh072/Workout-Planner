import React, { useState } from 'react';
import Detail from './Detail';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [formData, setFormData] = useState({
    day: '',
    title: '',
    load: '',
    sets: '',
    reps: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*     setWorkouts((prevWorkouts) => [...prevWorkouts, formData]);
    // Clear the form fields after submission
    setFormData({ load: '', title: '', sets: '', reps: '' }); */

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  };
  return (
    <div>
      <h1>Hi User! Let's plan our workout</h1>

      <div className="container">
        <Detail workouts={workouts} />
        <WorkoutForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          workouts={workouts}
        />
      </div>
    </div>
  );
};

export default Home;
