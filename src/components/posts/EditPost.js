import { useEffect, useState } from "react";
import classes from "./EditPost.module.css";
import ButtonRow from "../layout/ButtonRow";
import Button from "../layout/Button";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_name: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    // TODO Fetch categories data from the API
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

    // TODO Fetch posta
    setPost({
      id: 6,
      category: "Hogwarts",
      content: `Hi my name is Ebony Dark'ness Dementia Raven Way and I have long ebony black hair (that's how I got my name) with purple streaks.`,
      date: "2023-06-24",
      dislikes: 0,
      house: "Slytherin",
      likes: 6,
      popularity: 90,
      time: "20:30:00",
      title: "My Immortal",
      user: "Tara Way (enoby)",
      user_id: 323,

      awards: [
        {
          award_id: 1,
          award_type: "knowledge",
          name: "Historian of Magic",
          description:
            "This post contributes to or demonstrates vast knowledge of the Wizarding World's history and lore.",
          amount: 1,
        },
        {
          award_id: 2,
          award_type: "knowledge",
          name: "Muggle Studies Expert",
          description:
            "This post draws connections between the real world and Wizarding world or provides useful news about Muggles.",
          amount: 3,
        },
        {
          award_id: 3,
          award_type: "creativity",
          name: "Fanfiction Virtuoso",
          description: "This post is an artwork of fanfiction.",
          amount: 25,
        },
        {
          award_id: 4,
          award_type: "creativity",
          name: "Master of Role-play",
          description:
            "This post is a challanging and engaging RP prompt or offers insight into RP skills.",
          amount: 25,
        },
        {
          award_id: 5,
          award_type: "community",
          name: "Order of Merlin",
          description:
            "This post offers outstanding service to the Wizarding community.",
          amount: 11,
        },
        {
          award_id: 6,
          award_type: "creativity",
          name: "Student Prefect",
          description:
            "This post encourages and promotes community standards and positive behaviour.",
          amount: 25,
        },
      ],
      comments: [
        {
          comment_id: 1,
          user: "Raven Girl (raven)",
          user_id: 2,
          text: "Which band is performing?",
        },
        {
          comment_id: 2,
          user: "Brittney Prep (0)",
          user_id: 3,
          text: "OMG EBOBY SUX",
        },
        {
          comment_id: 3,
          user: "Sirius Black (dog)",
          user_id: 3,
          text: "U r so beautiful",
        },
        {
          comment_id: 4,
          user: "Sirius Black (dog)",
          user_id: 3,
          text: "U r so beautiful",
        },
        {
          comment_id: 5,
          user: "Sirius Black (dog)",
          user_id: 3,
          text: "U r so beautiful",
        },
      ],
    });
  }, []);

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
    const postObject = {
      post_id: id,
      category_id: selectedCategoryId,
      title: formData.title,
      content: formData.content,
    };

    console.log(postObject);

    // TODO: Edit post api
    // editPostApi(postObject)
    //   .then((response) => {
    //     // Handle success
    //   })
    //   .catch((error) => {
    //     // Handle error
    //   });

    navigate(`/post/` + id);
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
