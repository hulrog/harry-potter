import { useEffect, useState } from "react";
import classes from "./TagCloud.module.css";
// TODO poziv API-ja za tag cloud tj. popularnost odredjenih kategorija
// fetchCategoriesData

// ima prop onCategorySelect a to je funkcija koja se izvrsava kada ovde selektujemo kategoriju
// tu funkciju dobija od sidebara, a Sidebar-a dobija od Posts-a a u Posts-u je deklarisana
// kao setSelectedCategory
function TagCloud({ onCategorySelect }) {
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // u ovoj komponenti
    onCategorySelect(category); // propagacija nagore
    // Skida posle 1 sekunde
    setTimeout(() => {
      setSelectedCategory(null);
    }, 1000);
  };

  // Ovo je samo da bi prikazalo na ovoj komponenta  koja je kategorija selektovana
  // a propagacija nagore u Sidebar koponetnu se vrsi preko onCategorySelect
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className={classes.tagCloudContainer}>
      {categoriesData.map((category) => (
        <span
          key={category.category_name}
          className={`${classes.category} ${
            category.category_name === selectedCategory
              ? classes.selectedCategory
              : ""
          }`}
          style={{
            fontSize: `${calculateFontSize(category.popularity)}px`,
          }}
          onClick={() => handleCategorySelect(category.category_name)}
        >
          {category.category_name}
        </span>
      ))}
    </div>
  );
}

export default TagCloud;
