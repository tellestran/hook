import React, { useState } from "react";

const Todo = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) ?? [];
  });

  const handleOnClickSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  const deleteDataJob = (index) => {
    setJobs((currentJobs) => {
      const updatedJobs = currentJobs.filter((_, idx) => idx !== index);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };

  return (
    <div>
      <input value={job} onChange={(event) => setJob(event.target.value)} />
      <button onClick={handleOnClickSubmit}>Submit</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => deleteDataJob(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
