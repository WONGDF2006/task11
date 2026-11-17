import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      <StudentProfileCard
        name="WONGDF2006"
        studentId="202699475"
        major="Computer Engineering"
        year={3}
        gpa={3.75}
      />
      <StudentProfileCard name="Yongwee" studentId="202699472" major="Computer Engineering" year={2} gpa={3.5} />
      <StudentProfileCard name="Ryan" studentId="202699476" major="Computer Engineering" year={4} gpa={3.9} />
    </div>
  );
}

export default App;
