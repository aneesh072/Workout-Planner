import React from 'react';
import Detail from './Detail';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  return (
    <div>
      <h1>Hi User! Let's plan our workout</h1>

      <div className="container">
        <Detail />
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
