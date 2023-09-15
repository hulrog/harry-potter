import Categories from "../admin/Categories";
import Credits from "../admin/Credits";
import Students from "../admin/Students";
import classes from "./Admin.module.css";

function AdminPage() {
  return (
    <div className={classes.adminContainer}>
      <Categories></Categories>
      <Students></Students>
      <Credits></Credits>
    </div>
  );
}

export default AdminPage;
