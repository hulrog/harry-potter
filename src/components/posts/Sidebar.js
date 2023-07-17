import classes from "./Sidebar.module.css";
import TagCloud from "./TagCloud";

function Sidebar() {
  return (
    <div className={classes.sidebarContainer}>
      <TagCloud></TagCloud>
    </div>
  );
}

export default Sidebar;
