import React from "react";
import Badge from "./Badge";
import StatBar from "./StatBar";

const StudentCard = ({ student, getGrade }) => {
  const { avatar, firstName, lastName, track, isActive, score, skills } =
    student;

  const status = isActive ? "Active" : "Inactive";
  //   console.log(skills);
  //   console.log(firstName);

  const skillsList =
    skills.length > 0
      ? skills.map((skill, i) =>
          i !== skills.length - 1 ? ` ${skill}` : ` ${skill}`,
        )
      : "No skills listed yet";

  const grade = getGrade(score);

  return (
    <>
      <div
        className={`student-card ${isActive ? "student-active" : "student-inactive"}`}
      >
        <br />
        <img src={avatar} alt="student avatar" className="avatar" />

        <h2 className="name-text">{`${firstName} ${lastName}`}</h2>

        <div className="inline-div">
          <Badge label={track} type={track} />

          <Badge label={status} type={status} />

          <Badge label={`Grade: ${grade}`} type={grade} />
        </div>

        <StatBar label="Score" score={score} />

        <div>{`Skills: ${skillsList}`}</div>
        <br />
      </div>
    </>
  );
};

export default StudentCard;
