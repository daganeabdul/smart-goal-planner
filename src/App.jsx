import { useEffect, useState } from 'react';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/overview';
import './App.css';
import { BASE_URL } from "./config";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/goals`)
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


