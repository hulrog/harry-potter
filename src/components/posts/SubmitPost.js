import { useEffect, useState } from "react";
import classes from "./SubmitPost.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function SubmitPost({ prepoulatedTitle }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_id: "",
  });
  const { currentUser } = useAuth();

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getAllCategories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategoriesData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  const [formIsValid, setFormIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacija forme
    setFormIsValid(true);
    if (prepoulatedTitle) {
      formData.title = prepoulatedTitle;
    }
    const requiredFields = ["title", "content", "category_id"];
    const isFormValid = requiredFields.every((field) => formData[field] !== "");

    if (!isFormValid) {
      setFormIsValid(false);
      return;
    }

    // Post objekat za slanje na API
    const requestData = {
      user_id: currentUser.id,
      category_id: formData.category_id,
      title: formData.title,
      content: formData.content,
    };

    console.log(requestData);

    fetch("http://127.0.0.1:8000/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    navigate(`/posts`);
  };

  return (
    <div className={classes.submitPostContainer}>
      <form onSubmit={handleSubmit} className={classes.submitPostForm}>
        <h1 className={classes.heading}>New Post</h1>
        <table>
          <tbody>
            <tr>
              <td className={classes.label}>Title:</td>
              <td className={classes.valueTitle}>
                <input
                  type="text"
                  name="title"
                  value={prepoulatedTitle ? prepoulatedTitle : formData.title}
                  onChange={handleChange}
                  disabled={prepoulatedTitle ? true : false}
                />
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Category:</td>
              <td className={classes.value}>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  {categoriesData.map((category, index) => (
                    <option key={index} value={String(category.category_id)}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Content:</td>
              <td className={classes.value}>
                <textarea
                  className={classes.postContent}
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <ButtonRow>
          <Button text="Post" type="submit" />
        </ButtonRow>
        {!formIsValid && (
          <p className={classes.formValidationMessage}>
            Please fill in all the fields, then try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default SubmitPost;
