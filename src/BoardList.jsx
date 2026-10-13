
import { useState } from "react";
import BoardCard from "./BoardCard";
import "./BoardList.css";

function BoardList() {
  const [boards] = useState([
    {
      id: 1,
      title: "Mathematics",
      teacher: "Mathematics Department",
      tasks: 5,
    },
    {
      id: 2,
      title: "Science",
      teacher: "Science Department",
      tasks: 8,
    },
    {
      id: 3,
      title: "Computer Science",
      teacher: "Computer Science Department",
      tasks: 4,
    },
  ]);

  return (
    <section className="board-list">
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          title={board.title}
          teacher={board.teacher}
          tasks={board.tasks}
        />
      ))}
    </section>
  );
}

export default BoardList;
