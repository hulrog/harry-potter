import { useEffect, useState } from "react";
import classes from "./Students.module.css";
import Button from "../layout/Button";
import { useNavigate } from "react-router-dom";

function Students() {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // TODO api za dohvatanje
    const data = [
      {
        id: 1,
        firstName: "Petar",
        lastName: "Tomić",
        username: "hulrog",
        country: "Serbia",
        gender: "male",
        email: "petar99t@gmail.com",
        house: "ravenclaw",
        role: "admin",
        popularity: 2000,
        birthDate: "1999-11-06",
        memberSince: "2023-05-19",
        bio: "Co-creator of the website and master of the dark arts.",
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        username: "hulrog",
        country: "United States",
        gender: "male",
        email: "johndoe@gmail.com",
        house: "gryffindor",
        role: "user",
        popularity: 1500,
        birthDate: "1985-08-10",
        memberSince: "2022-03-25",
        bio: "Avid reader and lover of all things magical.",
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Smith",
        username: "schone",
        country: "Canada",
        gender: "female",
        email: "alice.smith@example.com",
        house: "hufflepuff",
        role: "user",
        popularity: 800,
        birthDate: "1992-06-15",
        memberSince: "2020-09-10",
        bio: "Enthusiastic potion brewer and aspiring wand maker.",
      },
      {
        id: 4,
        firstName: "Robert",
        lastName: "Johnson",
        username: "schone",
        country: "United Kingdom",
        gender: "male",
        email: "robertjohnson@gmail.com",
        house: "slytherin",
        role: "user",
        popularity: 1200,
        birthDate: "1998-03-27",
        memberSince: "2021-02-18",
        bio: "Seeker of hidden knowledge and lover of magical creatures.",
      },
      {
        id: 5,
        firstName: "Emily",
        lastName: "Wilson",
        username: "schone",
        country: "Australia",
        gender: "female",
        email: "emily.wilson@example.com",
        house: "ravenclaw",
        role: "user",
        popularity: 600,
        birthDate: "1995-09-22",
        memberSince: "2019-11-30",
        bio: "Curious mind with a passion for unraveling mysteries.",
      },
      {
        id: 6,
        firstName: "Daniel",
        lastName: "Lopez",
        username: "schone",
        country: "Spain",
        gender: "male",
        email: "daniel.lopez@example.com",
        house: "gryffindor",
        role: "user",
        popularity: 1000,
        birthDate: "1991-12-14",
        memberSince: "2020-07-05",
        bio: "Adventurous spirit and skilled Quidditch player.",
      },
      {
        id: 7,
        firstName: "Sophia",
        lastName: "Chen",
        username: "schone",
        country: "China",
        gender: "female",
        email: "sophia.chen@example.com",
        house: "hufflepuff",
        role: "user",
        popularity: 500,
        birthDate: "1997-04-03",
        memberSince: "2021-09-01",
        bio: "Nature lover and caretaker of magical plants.",
      },
      {
        id: 8,
        firstName: "Sophia",
        lastName: "Chen",
        country: "China",
        username: "schone",
        gender: "female",
        email: "sophia.chen@example.com",
        house: "ravenclaw",
        role: "user",
        popularity: 500,
        birthDate: "1997-04-03",
        memberSince: "2021-09-01",
        bio: "Nature lover and caretaker of magical plants.",
      },
      {
        id: 9,
        firstName: "Number",
        lastName: "Four",
        username: "schone",
        country: "China",
        gender: "female",
        email: "sophia.chen@example.com",
        house: "ravenclaw",
        role: "user",
        popularity: 500,
        birthDate: "1997-04-03",
        memberSince: "2021-09-01",
        bio: "Nature lover and caretaker of magical plants.",
      },
      {
        id: 10,
        firstName: "Number",
        lastName: "Five",
        username: "schone",
        country: "China",
        gender: "female",
        email: "sophia.chen@example.com",
        house: "ravenclaw",
        role: "user",
        popularity: 500,
        birthDate: "1997-04-03",
        memberSince: "2021-09-01",
        bio: "Nature lover and caretaker of magical plants.",
      },
      {
        id: 11,
        firstName: "Schone",
        lastName: "Gorilla",
        username: "schone",
        country: "Serbia",
        gender: "male",
        email: "schonegorilla@gmail.com",
        house: "slytherin",
        role: "user",
        popularity: 1200,
        birthDate: "1999-02-27",
        memberSince: "2023-02-18",
        bio: "Enthusiast of the banana and lover of monkeys.",
      },
    ];
    setStudentsData(data);
  }, []);

  const handleBanStudent = (id) => {
    // TODO appi za ban studenta

    setStudentsData((prevData) =>
      prevData.filter((student) => student.id !== id)
    );
  };

  const handleUsernameClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const filteredStudents = studentsData.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      student.username.toLowerCase().includes(searchText.toLowerCase()) ||
      student.id.toString().includes(searchText)
  );

  return (
    <div className={classes.studentsContainer}>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Search by name, username, or ID"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className={classes.studentsList}>
        {filteredStudents.map((student) => (
          <div className={classes.studentItem} key={student.id}>
            <span>User id: {student.id}</span>
            <span
              className={classes.username}
              onClick={() => handleUsernameClick(student.id)}
            >
              {student.firstName} {student.lastName} ({student.username})
            </span>
            <Button
              text="Ban"
              type="remove"
              onClick={() => handleBanStudent(student.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
