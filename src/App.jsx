

import BoardList from "./BoardList";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="school-brand">
          <div className="school-logo">🎓</div>

          <div>
            <h1>Bright Future School</h1>
            <p>Teacher Dashboard</p>
          </div>
        </div>

        <div className="header-badge">
          <span className="status-dot"></span>
          Teacher Portal
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard">
        <section className="welcome-section">
          <p className="welcome-label">WELCOME BACK</p>
          <h2>Manage Your Boards</h2>
          <p className="welcome-description">
            View your subject boards and keep classroom tasks organized
            in one place.
          </p>
        </section>

        <section className="boards-section">
          <div className="section-heading">
            <div>
              <h2>Your Boards</h2>
              <p>Choose a board to view its tasks.</p>
            </div>
          </div>

          <BoardList />
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} Bright Future School.
          Built for better classroom management.
        </p>
      </footer>
    </div>
  );
}

export default App;
