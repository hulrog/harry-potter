import Categories from "../admin/Categories";
import classes from "./Admin.module.css";

function AdminPage() {
  return (
    <div className={classes.adminContainer}>
      <Categories></Categories>
    </div>
  );
}

export default AdminPage;
