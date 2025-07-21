import { useState } from 'react';

function AddGoalForm({ setGoals }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    savedAmount: 0,
    category: '',
    deadline: '',
    createdAt: new Date().toISOString().split('T')[0],
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newGoal) => {
        setGoals((prev) => [...prev, newGoal]);
        setFormData({ ...formData, name: '', targetAmount: '', category: '', deadline: '' });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
