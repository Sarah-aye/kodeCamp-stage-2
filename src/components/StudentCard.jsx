import React from "react";
import Badge from "./Badge";
import StatBar from "./StatBar";

const StudentCard = ({ student }) => {
  const { avatar, firstName, lastName, track, isActive, score, skills } =
    student;

  const status = isActive ? "Active" : "Inactive";
  //   console.log(skills);
  //   console.log(firstName);

  const skillsList =
    skills.length > 0
      ? skills.map((skill, i) =>
          i !== skills.length - 1 ? `${skill}, ` : `${skill}`,
        )
      : "No skills listed yet";

  const grade =
    score >= 85 && score <= 100
      ? "A"
      : score >= 79 && score <= 84
        ? "B"
        : score >= 69 && score <= 78
          ? "C"
          : score >= 59 && score <= 68
            ? "D"
            : "F";

  return (
    <>
      <div className={isActive ? "student-active" : "student-inactive"}>
        <br />
        <img src={avatar} alt="student avatar" />

        <h2 className="name-text">{`${firstName} ${lastName}`}</h2>

        <Badge label={track} type={track} />

        <Badge label={status} type={status} />

        <Badge label={`Grade: ${grade}`} type={grade} />

        <StatBar label="Score" score={score} />

        <div>{skillsList}</div>
        <br />
      </div>
    </>
  );
};

export default StudentCard;
