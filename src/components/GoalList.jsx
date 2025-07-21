export default function GoalList({ goals, setGoals }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: 'DELETE'
    })
      .then(() => setGoals(goals.filter(goal => goal.id !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <div key={goal.id} className="goal-card">
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Deadline: {goal.deadline}</p>
          <progress value={goal.savedAmount} max={goal.targetAmount}></progress>
          <button onClick={() => handleDelete(goal.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
