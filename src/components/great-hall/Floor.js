import classes from "./Floor.module.css";
import Table from "./Table";

function Floor() {
  const usersData = [
    {
      id: 1,
      firstName: "Petar",
      lastName: "Tomić",
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

  const slytherinStudents = usersData.filter(
    (user) => user.house === "slytherin"
  );
  const ravenclawStudents = usersData.filter(
    (user) => user.house === "ravenclaw"
  );
  const gryffindorStudents = usersData.filter(
    (user) => user.house === "gryffindor"
  );
  const hufflepuffStudents = usersData.filter(
    (user) => user.house === "hufflepuff"
  );

  return (
    <div className={classes.floor}>
      <Table students={slytherinStudents} />
      <Table students={ravenclawStudents} />
      <Table students={gryffindorStudents} />
      <Table students={hufflepuffStudents} />
    </div>
  );
}

export default Floor;
