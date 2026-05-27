import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({
  students,
  title = "All Students",
  getGrade,
  children,
}) => {
  return (
    <div>
      <br />
      <h3>{title}</h3>
      <div className="student-list">
        {students.length === 0 ? (
          <p>No students to display</p>
        ) : (
          students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              getGrade={getGrade}
            />
          ))
        )}
      </div>
      <br />
      {children}
    </div>
  );
};

export default StudentList;
