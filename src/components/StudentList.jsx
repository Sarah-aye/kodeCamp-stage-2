import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", children }) => {
  return (
    <div>
      <br />
      <h3>{title}</h3>
      <div className="student-list">
        {students.length === 0 ? (
          <p>No students to display</p>
        ) : (
          students.map((student) => <StudentCard student={student} />)
        )}
      </div>
      <br />
      {children}
    </div>
  );
};

export default StudentList;
