import classes from "./HighTable.module.css";
import Seat from "./Seat";

function HighTable(props) {
  const adminsData = [
    {
      id: 1,
      firstName: "Albus",
      lastName: "Dumbbelldore",
      country: "Ireland",
      gender: "other",
      email: "albusdumbbelldore@gmail.com",
      house: "gryffindor",
      role: "admin",
      popularity: 3000,
      birthDate: "1999-06-27",
      memberSince: "2023-01-12",
      bio: "Loremaster",
    },
    {
      id: 2,
      firstName: "Aleksandar",
      lastName: "Trifunović",
      country: "Serbia",
      gender: "male",
      email: "aleksandartrifunovic@gmail.com",
      house: "slytherin",
      role: "admin",
      popularity: 3000,
      birthDate: "1999-06-27",
      memberSince: "2023-01-12",
      bio: "Lord of Laravel and master of the data.",
    },
    {
      id: 3,
      firstName: "Minerva",
      lastName: "McGonagal",
      country: "United Kingdom",
      gender: "female",
      email: "minervamcgonagall@gmail.com",
      house: "gryffindor",
      role: "admin",
      popularity: 1200,
      birthDate: "1967-02-27",
      memberSince: "2019-02-18",
      bio: "Transfiguration teacher and animagus.",
    },
  ];

  const sortedProfessors = adminsData.sort(
    (a, b) => b.popularity - a.popularity
  );
  return (
    <div className={classes.highTableContainer}>
      <div className={classes.seatsContainer}>
        {arrangeSeats(sortedProfessors)}
      </div>
      <div className={classes.highTable}> </div>
    </div>
  );
}

// Postavljane u redosled:
// najpopularniji profesor sedi u sredini (direktor)
// pa onda je sledeci prvi sa desna, pa sledeci prvi sa leva
// pa onda je sledeci drugi sa desna, pa sledeci drugi sa leva
function arrangeSeats(sortedProfessors) {
  const seatOrder = generateSeatOrder(sortedProfessors.length);
  const seats = [];

  for (let i = 0; i < seatOrder.length; i++) {
    const professorIndex = seatOrder[i];
    const professor = sortedProfessors[professorIndex];
    seats.push(<Seat key={professor.id} student={professor} />);
  }

  return seats;
}

function generateSeatOrder(numberOfProfessors) {
  const seatOrder = [];

  for (let i = 1; i < numberOfProfessors; i += 2) {
    seatOrder.unshift(i);
  }
  for (let i = 0; i < numberOfProfessors; i += 2) {
    seatOrder.push(i);
  }

  return seatOrder;
}

export default HighTable;
