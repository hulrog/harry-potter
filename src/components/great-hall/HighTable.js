import { useEffect, useState } from "react";
import classes from "./HighTable.module.css";
import Seat from "./Seat";

function HighTable(props) {
  const [adminsData, setAdminsData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getAllAdmins")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const transformedData = data.map((user) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          country: user.country,
          gender: user.gender,
          email: user.email,
          house: user.house,
          role: user.role,
          popularity: user.popularity,
          birthDate: user.birth_date,
          memberSince: user.member_since,
          bio: user.bio,
        }));
        console.log(transformedData);

        setAdminsData(transformedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

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
