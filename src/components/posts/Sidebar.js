import { useNavigate } from "react-router-dom";
import classes from "./Sidebar.module.css";
import TagCloud from "./TagCloud";
import Button from "../layout/Button";

function Sidebar() {
  const navigate = useNavigate();

  const handleSubmitPostClick = () => {
    navigate("/submit-post");
  };
  return (
    <div className={classes.sidebarContainer}>
      <TagCloud></TagCloud>
      <Button
        type="submit"
        text="Submit Post"
        onClick={handleSubmitPostClick}
      />
    </div>
  );
}

export default Sidebar;
