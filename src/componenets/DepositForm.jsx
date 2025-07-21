import { useState } from 'react';

function DepositForm({ goals, setGoals }) {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    const updatedGoal = { ...goal, savedAmount: Number(goal.savedAmount) + Number(amount) };

    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then(res => res.json())
      .then(updated => {
        setGoals(goals.map(g => g.id === goalId ? updated : g));
        setAmount('');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make Deposit</h2>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Deposit Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
