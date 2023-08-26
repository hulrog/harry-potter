import classes from "./Profile.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import Modal from "../layout/Modal";
import Loader from "../layout/Loader";
import Button from "../layout/Button";
import { useAuth } from "../auth/AuthContext";
import EditUser from "../profile/EditUser";
import User from "../profile/User";
import UserStats from "../profile/UserStats";

function ProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const { setAuthenticated, setCurrentUser, currentUser } = useAuth();
  const navigate = useNavigate();

  // TODO: dohvatiti datu sa API-ja
  // napisati funkciju getUserData ispod u ovom fajlu i izbrisati mock
  useEffect(() => {
    // getUserData(id)
    //   .then((data) => {
    //     setUserData(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user data:", error);
    //   });
    setUserData({
      id: 10,
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
    });
  }, [id]);

  const handleEditProfileClick = () => {
    setShowEditModal(true);
  };

  const handleLogoutClick = () => {
    setAuthenticated(false);
    setCurrentUser(null);
    navigate("/login");
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };

  if (!userData) {
    return <Loader></Loader>;
  }

  return (
    <div className={classes.profileContainer}>
      <Card>
        <User userData={userData}></User>
      </Card>

      {currentUser.id === parseInt(id) && (
        <Card>
          <ButtonRow>
            <Button text="Log Out" onClick={handleLogoutClick} />
            <Button text="Edit Profile" onClick={handleEditProfileClick} />
          </ButtonRow>
        </Card>
      )}

      {showEditModal && (
        <Modal onClose={handleModalClose}>
          <EditUser />
        </Modal>
      )}
      <UserStats></UserStats>
    </div>
  );
}

export default ProfilePage;
