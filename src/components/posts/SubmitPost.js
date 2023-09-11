import { useEffect, useState } from "react";
import classes from "./SubmitPost.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function SubmitPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_id: "",
  });
  const { currentUser } = useAuth();

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    // Fetch categories data from the API
    // fetchCategoriesData()
    //   .then((data) => {
    //     setCategoriesData(data);
    //   })
    //   .catch((error) => console.error(error));
    const data = [
      {
        category_id: 1,
        category_name: "Hogwarts",
      },
      {
        category_id: 2,
        category_name: "Fanfiction",
      },
      {
        category_id: 3,
        category_name: "TV Show",
      },
      {
        category_id: 4,
        category_name: "Movies",
      },
      {
        category_id: 5,
        category_name: "Books",
      },
    ];
    setCategoriesData(data);
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
    const requiredFields = ["title", "content", "category"];
    const isFormValid = requiredFields.every((field) => formData[field] !== "");

    if (!isFormValid) {
      setFormIsValid(false);
      return;
    }

    // Post objekat za slanje na API
    const postObject = {
      user_id: currentUser.id,
      category_id: formData.category_id,
      title: formData.title,
      content: formData.content,
    };

    console.log(postObject);

    // TODO: Send the postObject to your API to create the post
    // callCreatePostAPI(postObject)
    //   .then((response) => {
    //     // Handle success
    //   })
    //   .catch((error) => {
    //     // Handle error
    //   });

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
                  value={formData.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Category:</td>
              <td className={classes.value}>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  {categoriesData.map((category, index) => (
                    <option key={index} value={category.category_id}>
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
