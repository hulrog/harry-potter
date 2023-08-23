import { useEffect, useState } from "react";
import classes from "./Categories.module.css";
import Button from "../layout/Button";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    // TODO api za dohvatanje
    const data = [
      {
        category_name: "Hogwarts",
        popularity: 150,
      },
      {
        category_name: "Fanfiction",
        popularity: 100,
      },
      {
        category_name: "TV Show",
        popularity: 60,
      },
      {
        category_name: "Movies",
        popularity: 30,
      },
      {
        category_name: "Books",
        popularity: 70,
      },
    ];
    setCategoriesData(data);
  }, []);

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== "") {
      // TODO api za add

      setCategoriesData((prevData) => [
        ...prevData,
        { category_name: newCategoryName, popularity: 0 },
      ]);

      setNewCategoryName("");
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
