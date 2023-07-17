import { useEffect, useState } from "react";
import classes from "./TagCloud.module.css";
// TODO poziv API-ja za tag cloud tj. popularnost odredjenih kategorija
// fetchCategoriesData

function TagCloud() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [minPopularity, setMinPopularity] = useState(0);
  const [maxPopularity, setMaxPopularity] = useState(0);

  useEffect(() => {
    // Fetch categories data from the API
    // fetchCategoriesData()
    //   .then((data) => {
    //     const popularityValues = data.map((category) => category.popularity);
    //     setMinPopularity(Math.min(...popularityValues));
    //     setMaxPopularity(Math.max(...popularityValues));
    //     setCategoriesData(data);
    //   })
    //   .catch((error) => console.error(error));
    const data = [
      {
        category_name: "Hogwarts",
        popularity: 200,
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
    const popularityValues = data.map((category) => category.popularity);
    setMinPopularity(Math.min(...popularityValues));
    setMaxPopularity(Math.max(...popularityValues));
    setCategoriesData(data);
  }, []);

  const calculateFontSize = (popularity) => {
    const scaleFactor = 1; // Koeficijent
    const fontSizeRange = [14, 50]; // Raspon
    const scaledSize =
      fontSizeRange[0] +
      ((popularity - minPopularity) / (maxPopularity - minPopularity)) *
        (fontSizeRange[1] - fontSizeRange[0]);
    return Math.round(scaledSize * scaleFactor);
  };

  return (
    <div className={classes.tagCloudContainer}>
      {categoriesData.map((category) => (
        <span
          key={category.category_name}
          className={classes.category}
          style={{
            fontSize: `${calculateFontSize(category.popularity)}px`,
          }}
        >
          {category.category_name}
        </span>
      ))}
    </div>
  );
}

export default TagCloud;
