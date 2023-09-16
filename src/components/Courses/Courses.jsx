import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  console.log("course data", courses);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-3/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        {courses.map((course, idx) => (
          <Course key={idx} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
