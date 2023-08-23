import Categories from "../admin/Categories";
import Students from "../admin/Students";
import classes from "./Admin.module.css";

function AdminPage() {
  return (
    <div className={classes.adminContainer}>
      <Categories></Categories>
      <Students></Students>
    </div>
  );
}

export default AdminPage;
