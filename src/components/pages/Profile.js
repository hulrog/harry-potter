import ButtonRow from "../layout/ButtonRow";
import Card from "../layout/Card";
import Statistics from "../Statistics";
import User from "../User";
import { useState } from "react";
import EditUser from "../EditUser";
import Modal from "../layout/Modal";

function ProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditProfileClick = () => {
    setShowEditModal(true);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };
  return (
    <div>
      <Card>
        <User></User>
      </Card>

      <Card>
        <Statistics></Statistics>
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
