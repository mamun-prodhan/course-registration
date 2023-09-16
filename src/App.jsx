import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const handleSelectCouse = (course) => {
    const isCourseExists = selectedCourses.find(
      (selectedCourse) => selectedCourse.id === course.id
    );

    if (isCourseExists) {
      alert("already exists");
    } else {
      const creditHour = totalCreditHour + course.credit_hour;
      if (creditHour <= 20) {
        const newAddedCourse = [...selectedCourses, course];
        setSelectedCourses(newAddedCourse);
        setTotalCreditHour(creditHour);
      } else {
        alert("credit hour limit is 20");
      }
    }
  };
  console.log(selectedCourses);
  console.log(totalCreditHour);

  return (
    <>
      <Header></Header>
      <main className="bg-[#F3F3F3] flex flex-col md:flex-row px-16">
        <Courses handleSelectCouse={handleSelectCouse}></Courses>
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
