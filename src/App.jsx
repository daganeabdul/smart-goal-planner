import { useEffect, useState } from 'react';
import GoalList from './componenets/GoalList';
import AddGoalForm from './componenets/AddGoalForm';
import DepositForm from './componenets/DepositForm';
import Overview from './componenets/overview';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then((res) => res.json())
      .then(setGoals)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1> Smart Goal Planner</h1>
      <AddGoalForm setGoals={setGoals} />
      <DepositForm goals={goals} setGoals={setGoals} />
      <Overview goals={goals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}

export default App;


