import "./App.css";
import { useState } from "react";
import Course from "./Course/course";
import course from "./Course/course";

function getRandomCourse() {
  const courses = ["Angular", "Bootstrap", "Backend", "Frontend"];
  return courses[Math.floor(Math.random() * courses.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  function handleClick() {
    setCourses([...courses, getRandomCourse()]);
  }
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Click For The Add
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
