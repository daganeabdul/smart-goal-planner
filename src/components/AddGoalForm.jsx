import { useState } from 'react';

export default function AddGoalForm({ setGoals }) {
  const [form, setForm] = useState({
    name: '', targetAmount: '', savedAmount: 0, category: '', deadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, savedAmount: Number(form.savedAmount) })
    })
      .then(res => res.json())
      .then(newGoal => setGoals(prev => [...prev, newGoal]))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Goal Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Target Amount" type="number" onChange={e => setForm({ ...form, targetAmount: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Deadline" type="date" onChange={e => setForm({ ...form, deadline: e.target.value })} />
      <button type="submit">Add Goal</button>
    </form>
  );
}
