import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import User from "../User";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EditUser from "../EditUser";
import Modal from "../layout/Modal";
import Loader from "../layout/Loader";

function ProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

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
    });
  }, [id]);

  const handleEditProfileClick = () => {
    setShowEditModal(true);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };

  if (!userData) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Card>
        <User userData={userData}></User>
      </Card>

      <Card>
        <ButtonRow>
          <button> Log Out </button>
          <button onClick={handleEditProfileClick}> Edit Profile </button>
        </ButtonRow>
      </Card>

      {showEditModal && (
        <Modal onClose={handleModalClose}>
          <EditUser />
        </Modal>
      )}
    </div>
  );
}

export default ProfilePage;
