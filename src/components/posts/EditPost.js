import { useEffect, useState } from "react";
import classes from "./EditPost.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { currentUser } = useAuth();
  const currentUserId = currentUser.id;

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_name: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

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
      })
      .finally(() => {});

    fetch(`http://127.0.0.1:8000/getPostById/${id}/${currentUserId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [currentUserId, id]);

  useEffect(() => {
    setFormData({
      title: post ? post.title : "",
      content: post ? post.content : "",
      category_name: post ? post.category : "",
    });
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle changes to other fields
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const findCategoryIdByName = (categoryName) => {
    const selectedCategory = categoriesData.find(
      (category) => category.category_name === categoryName
    );
    return selectedCategory ? selectedCategory.category_id : "";
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

    // FIND THE ID BASED ON THE SELECTED CATEGORY NAME HERE
    const selectedCategoryId = findCategoryIdByName(formData.category_name);

    // Post objekat za slanje na API
    const requestData = {
      post_id: id,
      category_id: selectedCategoryId,
      title: formData.title,
      content: formData.content,
    };

    console.log(requestData);

    fetch("http://127.0.0.1:8000/api/editPost", {
      method: "PUT",
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
    navigate(`/post/${id}`);
  };

  return (
    <div className={classes.submitPostContainer}>
      <form onSubmit={handleSubmit} className={classes.submitPostForm}>
        <h1 className={classes.heading}>Edit Post {id}</h1>
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
                  name="category_name"
                  value={formData.category_name}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  {categoriesData.map((category, index) => (
                    <option key={index} value={category.category_name}>
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
          <Button text="Save" type="submit" />
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

export default EditPost;
