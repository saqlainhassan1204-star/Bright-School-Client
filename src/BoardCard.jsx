
import React from "react";
import "./BoardCard.css";

function BoardCard({ title, teacher = "School Teacher", tasks = 0 }) {
  return (
    <div className="board-card">
      <div className="board-card-header">
        <div className="board-icon">📚</div>
        <span className="board-status">Active</span>
      </div>

      <div className="board-card-content">
        <h2>{title}</h2>
        <p className="board-teacher">
          <span>👨‍🏫</span> {teacher}
        </p>

        <div className="board-card-footer">
          <div className="task-info">
            <span className="task-number">{tasks}</span>
            <span className="task-label">
              {tasks === 1 ? "Task" : "Tasks"}
            </span>
          </div>

          <button
            type="button"
            className="view-board-btn"
            onClick={() => alert(`Opening ${title}`)}
          >
            View Board <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
