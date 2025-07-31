import { BASE_URL } from "../config";

function GoalCard({ goal, setGoals }) {
  const { id, name, targetAmount, savedAmount, deadline, category } = goal;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);

  const isNearDeadline = (new Date(deadline) - new Date()) / (1000 * 3600 * 24) <= 30;
  const isOverdue = new Date(deadline) < new Date() && savedAmount < targetAmount;

  function handleDelete() {
    fetch(`${BASE_URL}/goals/${id}`, { method: 'DELETE' })
      .then(() => {
        setGoals((prev) => prev.filter((g) => g.id !== id));
      });
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Deadline: {deadline}</p>
      <progress value={progress} max="100"></progress> {progress}%
      {isNearDeadline && !isOverdue && <p style={{ color: 'orange' }}>⚠️ Deadline soon!</p>}
      {isOverdue && <p style={{ color: 'red' }}>❌ Overdue</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default GoalCard;
