import React from "react";

const Header = (props) => {
  return (
    <div>
      <header>
        <h1 className="header">KodeCamp 6.0 - Student Dashboard</h1>
        <div>
          {`${props.students.length} Students enrolled | Class Average: ${props.averageScore}%`}{" "}
        </div>
      </header>
    </div>
  );
};

export default Header;

// needs fixing, one more point not satisfied. the desctructuring. don't exactly know which part need it.
