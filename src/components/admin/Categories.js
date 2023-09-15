import { useEffect, useState } from "react";
import classes from "./Categories.module.css";
import Button from "../layout/Button";
import Loader from "../layout/Loader";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== "") {
      if (!/^[a-zA-Z0-9\s]+$/.test(newCategoryName)) {
        setErrorMessage(
          "Category name is invalid. It should be one word with no special characters."
        );
        return;
      }

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
          setCategoriesData((prevData) => [...prevData, data.data]);
          setNewCategoryName("");
          setErrorMessage("");
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      setErrorMessage("Category name cannot be empty.");
    }
  };

  const handleRemoveCategory = (categoryId) => {
    const requestData = {
      category_id: categoryId,
    };

    fetch("http://127.0.0.1:8000/api/deleteCategory", {
      method: "DELETE",
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
        setCategoriesData((prevData) =>
          prevData.filter((category) => category.category_id !== categoryId)
        );
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className={classes.categoriesContainer}>
      {isLoading ? (
        <Loader> </Loader>
      ) : (
        <>
          <div className={classes.categoriesList}>
            {categoriesData.map((category) => (
              <div className={classes.categoryItem} key={category.category_id}>
                {category.category_name}
                <span
                  className={classes.removeButton}
                  onClick={() => handleRemoveCategory(category.category_id)}
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
            <Button
              text="Add"
              type="submit"
              onClick={handleAddCategory}
            ></Button>
          </div>
          {errorMessage && (
            <p className={classes.errorMessage}>{errorMessage}</p>
          )}
        </>
      )}
    </div>
  );
}

export default Categories;
