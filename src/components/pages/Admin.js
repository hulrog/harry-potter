import Categories from "../admin/Categories";
import Credits from "../admin/Credits";
import Students from "../admin/Students";
import { useAuth } from "../auth/AuthContext";
import classes from "./Admin.module.css";

function AdminPage() {
  const { currentUser } = useAuth();

  return (
    <div className={classes.adminContainer}>
      {currentUser.role === "admin" && (
        <>
          <Categories></Categories>
          <Students></Students>
        </>
      )}
      <Credits></Credits>
    </div>
  );
}

export default AdminPage;
