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

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/getUserById/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const user = data;
        const transformedData = {
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
        };

        setUserData(transformedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
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
