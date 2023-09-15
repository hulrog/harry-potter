import { useEffect, useState } from "react";
import classes from "./Students.module.css";
import Button from "../layout/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader";

function Students() {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        setStudentsData(transformedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleBanStudent = (id) => {
    fetch(`http://127.0.0.1:8000/api/banUser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    setStudentsData((prevData) =>
      prevData.filter((student) => student.id !== id)
    );
  };

  const handleUsernameClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  useEffect(() => {
    const filtered = studentsData.filter((student) => {
      const searchLower = searchText.toLowerCase();
      return (
        student.firstName.toLowerCase().includes(searchLower) ||
        student.lastName.toLowerCase().includes(searchLower) ||
        student.username.toLowerCase().includes(searchLower) ||
        student.id.toString().includes(searchLower)
      );
    });

    setFilteredStudents(filtered);
  }, [studentsData, searchText]);

  return (
    <div className={classes.studentsContainer}>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
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
                {student.username === "0" ? (
                  <>
                    <span>User id: {student.id}</span>

                    <span
                      className={classes.username}
                      onClick={() => handleUsernameClick(student.id)}
                    >
                      {student.firstName} {student.lastName} (Banned)
                    </span>
                    <Button
                      text="See profile"
                      type="remove"
                      onClick={() => handleUsernameClick(student.id)}
                    />
                  </>
                ) : (
                  <>
                    <span>User id: {student.id}</span>
                    <span
                      className={classes.username}
                      onClick={() => handleUsernameClick(student.id)}
                    >
                      {student.firstName} {student.lastName} ({student.username}
                      )
                    </span>
                    <Button
                      text="Ban"
                      type="remove"
                      onClick={() => handleBanStudent(student.id)}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Students;
