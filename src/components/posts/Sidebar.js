import { useNavigate } from "react-router-dom";
import classes from "./Sidebar.module.css";
import TagCloud from "./TagCloud";
import Button from "../layout/Button";

// predaje funkciju nadole, u TagCloud a ta funkcija je deklarisana u Posts
// i to je ustvari setSelectedCategory
function Sidebar({ onCategorySelect }) {
  const navigate = useNavigate();

  const handleSubmitPostClick = () => {
    navigate("/submit-post");
  };

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };
  return (
    <div className={classes.sidebarContainer}>
      <TagCloud onCategorySelect={handleCategorySelect}></TagCloud>
      <Button
        type="submit"
        text="Submit Post"
        onClick={handleSubmitPostClick}
      />
    </div>
  );
}

export default Sidebar;
