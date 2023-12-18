import React from "react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "javascript",
  },
  {
    id: 3,
    name: "ReactJs",
  },
];
const expYears = [
  {
    id: 1,
    quantity: "1 year",
  },
  {
    id: 2,
    quantity: "2 years",
  },
  {
    id: 3,
    quantity: "3 years",
  },
];

const Revision = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState([]); // For courses
  const [year, setYear] = useState(); // For experience year

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      return isChecked ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  const handleSubmit = () => {
    const selectedYear = expYears.find((expYear) => expYear.id === year);
    const selectedCourses = courses
      .filter((course) => checked.includes(course.id))
      .map((course) => course.name);

    console.log(
      "Name:",
      name,
      "Email:",
      email,
      "YearExperience:",
      selectedYear ? selectedYear.quantity : "None selected",
      "Selected Courses:",
      selectedCourses
    );
  };
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      {expYears.map((expYear) => (
        <div key={expYear.id} style={{ padding: "20px" }}>
          <input
            type="radio"
            checked={year === expYear.id}
            onChange={() => setYear(expYear.id)}
          />
          {expYear.quantity}
        </div>
      ))}

      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Revision;
