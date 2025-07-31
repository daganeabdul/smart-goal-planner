
import { useState } from 'react';
import { BASE_URL } from "./config";

function DepositForm({ goals, setGoals }) {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalId || !amount) return;

    const selectedGoal = goals.find(goal => goal.id === goalId);
    const newSavedAmount = parseFloat(selectedGoal.savedAmount) + parseFloat(amount);

    fetch(`${BASE_URL}/goals/${goalId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ savedAmount: newSavedAmount }),
    })
    
      .then(res => res.json())
      .then(updatedGoal => {
        
        const updatedGoals = goals.map(goal =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        );
        setGoals(updatedGoals);
        setAmount('');
        setGoalId('');
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Deposit amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;



