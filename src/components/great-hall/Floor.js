import { useEffect, useState } from "react";
import classes from "./Floor.module.css";
import Table from "./Table";
import Loader from "../layout/Loader";

function Floor() {
  const [isLoading, setIsLoading] = useState(true);

  const [usersData, setUsersData] = useState([]);

  const [slytherinStudents, setSlytherinStudents] = useState([]);
  const [gryffindorStudents, setGryffindorStudents] = useState([]);
  const [ravenclawStudents, setRavenclawStudents] = useState([]);
  const [hufflepuffStudents, setHufflepuffStudents] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/getAllRegularUsers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("get regular user pozvan");
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
        setUsersData(transformedData);
        setIsLoading(false); // Move setIsLoading here to indicate that data has been fetched.
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false); // Make sure to set isLoading to false in case of an error.
      });
  }, []);

  // Move the data processing logic into a separate useEffect.
  useEffect(() => {
    setSlytherinStudents(
      usersData.filter(
        (user) => user.house === "slytherin" && user.username !== "0"
      )
    );
    setRavenclawStudents(
      usersData.filter(
        (user) => user.house === "ravenclaw" && user.username !== "0"
      )
    );
    setGryffindorStudents(
      usersData.filter(
        (user) => user.house === "gryffindor" && user.username !== "0"
      )
    );
    setHufflepuffStudents(
      usersData.filter(
        (user) => user.house === "hufflepuff" && user.username !== "0"
      )
    );

    let totalPointsData = 0;
    for (const student of usersData) {
      totalPointsData += student.popularity;
    }
    setTotalPoints(totalPointsData);
  }, [usersData]);

  return (
    <div className={classes.floor}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Table students={slytherinStudents} totalPoints={totalPoints} />
          <Table students={ravenclawStudents} totalPoints={totalPoints} />
          <Table students={gryffindorStudents} totalPoints={totalPoints} />
          <Table students={hufflepuffStudents} totalPoints={totalPoints} />
        </>
      )}
    </div>
  );
}

export default Floor;
