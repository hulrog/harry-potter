import { useEffect, useState } from "react";
import classes from "./Categories.module.css";
import Button from "../layout/Button";
import Loader from "../layout/Loader";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    // setIsLoading(true);
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
          setCategoriesData((prevData) => [...prevData, data.data]);

          setNewCategoryName("");
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
      // .finally(() => {
      //   setIsLoading(false);
      // });
    }
  };

  const handleRemoveCategory = (categoryId) => {
    // setIsLoading(true);

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
    // .finally(() => {
    //   setIsLoading(false);
    // });
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
        </>
      )}
    </div>
  );
}

export default Categories;
