import { useEffect, useState } from "react";
import classes from "./Categories.module.css";
import Button from "../layout/Button";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

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

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== "") {
      const requestData = {
        category_name: newCategoryName,
      };

      fetch("http://127.0.0.1:8000/api/createCategory", {
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
        .then((data) => {
          console.log(data);

          console.log(categoriesData);
          setCategoriesData((prevData) => [...prevData, data.data]);
          console.log(categoriesData);

          setNewCategoryName("");
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  const handleRemoveCategory = (categoryName) => {
    // TODO appi za delete

    setCategoriesData((prevData) =>
      prevData.filter((category) => category.category_name !== categoryName)
    );
  };

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesList}>
        {categoriesData.map((category) => (
          <div className={classes.categoryItem} key={category.category_name}>
            {category.category_name}
            <span
              className={classes.removeButton}
              onClick={() => handleRemoveCategory(category.category_name)}
            >
              ✖
            </span>
          </div>
        ))}
      </div>
      <div className={classes.addCategoryContainer}>
        <input
          type="text"
          placeholder="Enter new category"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <Button text="Add" type="submit" onClick={handleAddCategory}></Button>
      </div>
    </div>
  );
}

export default Categories;
