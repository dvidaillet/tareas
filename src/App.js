import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./modules/task/context/taskContext";
import HomePage from "./modules/task/pages/HomePage";
import AddTaskPage from "./modules/task/pages/AddTaskPage";
import AboutPage from "./modules/task/pages/AboutPage";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
