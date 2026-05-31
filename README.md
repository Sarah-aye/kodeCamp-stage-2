# KodeCamp 6.0 — Student Profile Card App

## Author

Sarah Malwil

## Overview

This project is a solution to the **KodeCamp 6.0 Stage 2 Promotional Task**. The application displays student profile cards using reusable React components and demonstrates core React concepts including:

- JSX
- Functional Components
- Props
- Component Composition
- Conditional Rendering
- Array Mapping
- Destructuring
- Dynamic Styling

The application renders a student dashboard containing profile cards, score statistics, grade badges, and filtering functionality.

---

## Live Demo

**Live URL:** [(https://kode-camp-stage-2.vercel.app/)]

## Repository

**GitHub Repository:** [(https://github.com/Sarah-aye/kodeCamp-stage-2)]

---

## Features

### Header Component

Displays:

- Dashboard title
- Total student count
- Average class score

### Student Profile Cards

Each card displays:

- Student avatar
- Full name
- Learning track
- Active/Inactive status
- Letter grade
- Score progress bar
- Skills list

### Reusable Badge Component

Badges are used to display:

- Track
- Status
- Grade

### Score Visualization

The StatBar component visually represents student scores using dynamic colors:

- Green (80–100)
- Orange (60–79)
- Red (Below 60)

### Student Filtering

Users can:

- Show all students
- Show active students only

Filtering is implemented using URL query parameters and `window.location.search`.

Example:

```url
/?active=true
```

This approach was chosen to satisfy the project requirement of **not using React state (`useState`) or React Router**.

---

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── components/
│   ├── Header.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── Badge.jsx
│   └── StatBar.jsx
```

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Vite

---

## Implementation Details

### Average Score Calculation

The class average is calculated using JavaScript's `reduce()` method.

```javascript
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

const averageScore = (totalScore / students.length).toFixed(1);
```

---

### Grade Calculation

Student grades are generated using a reusable helper function.

```javascript
const getGrade = (score) => {
  return score >= 90
    ? "A"
    : score >= 80
      ? "B"
      : score >= 70
        ? "C"
        : score >= 60
          ? "D"
          : "F";
};
```

---

### Conditional Rendering

The application uses conditional rendering to:

- Display active/inactive status
- Show empty state messages
- Render skills lists
- Apply different card styles

Example:

```jsx
{
  skills.length > 0
    ? skills.map((skill) => <span key={skill}>{skill}</span>)
    : "No skills listed yet";
}
```

---

### Filtering Strategy

To comply with the task requirement of avoiding React state, filtering is driven by URL query parameters.

The application reads the current query string using:

```javascript
const params = new URLSearchParams(window.location.search);
```

The students list is then filtered based on the value of the query parameter before rendering.

Because this approach relies on browser navigation, changing filters causes a full page reload when the URL changes.

---

## Challenges & Learning Outcomes

During development, I gained practical experience with:

- Building reusable React components
- Passing data through multiple component levels using props
- Component composition patterns
- Conditional rendering techniques
- Dynamic CSS class generation
- Using URL query parameters for filtering without state management
- Structuring React applications for maintainability

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd student-profile-card-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Future Improvements

Potential enhancements include:

- Search functionality
- Multiple filters (Track, Grade, Status)
- Sorting by score
- Pagination
- URL-based filtering without page reload using React Router
- Improved responsive design

---
