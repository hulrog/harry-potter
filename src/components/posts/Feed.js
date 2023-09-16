import React, { useEffect, useState } from "react";
import classes from "./Feed.module.css";
import Pagination from "./Pagination";
import Thumbnail from "./Thumbnail";
import { useAuth } from "../auth/AuthContext";
import Loader from "../layout/Loader";

function Feed({ selectedCategory }) {
  const { currentUser } = useAuth();
  const id = currentUser.id;

  const [selectedOption, setSelectedOption] = useState("for_you");
  const [searchQuery, setSearchQuery] = useState("");

  const [newPostsData, setNewPostsData] = useState([]);
  const [forYouPostsData, setForYouPostsData] = useState([]);
  const [likedPostsData, setLikedPostsData] = useState([]);
  const [commentedPostsData, setCommentedPostsData] = useState([]);
  const [savedPostsData, setSavedPostsData] = useState([]);
  const [categorizedPostsData, setCategorizedPostsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedOption === "categorized" && !selectedCategory) {
      return;
    }

    const fetchData = (option) => {
      setIsLoading(true);
      const fetchURLs = {
        for_you: `http://127.0.0.1:8000/api/getForYouPage/${id}`,
        new: `http://127.0.0.1:8000/getNewPosts/${id}`,
        liked: `http://127.0.0.1:8000/getPostsLikedByUser/${id}`,
        saved: `http://127.0.0.1:8000/getPostsSavedByUser/${id}`,
        commented: `http://127.0.0.1:8000/getPostsCommentedByUser/${id}`,
        categorized: `http://127.0.0.1:8000/getPostsByCategory/${selectedCategory}/${id}`,
      };

      fetch(fetchURLs[option])
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          switch (option) {
            case "for_you":
              setForYouPostsData(data);
              break;
            case "new":
              setNewPostsData(data);
              break;
            case "liked":
              setLikedPostsData(data);
              break;
            case "saved":
              setSavedPostsData(data);
              break;
            case "commented":
              setCommentedPostsData(data);
              break;
            case "categorized":
              setCategorizedPostsData(data);
              break;
            default:
              break;
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          setIsLoading(false);
        });
    };
    fetchData(selectedOption);
  }, [selectedOption, selectedCategory, id]);

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      setSelectedOption("categorized");
      console.log(selectedCategory);
      fetch(
        `http://127.0.0.1:8000/getPostsByCategory/${selectedCategory}/${id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setCategorizedPostsData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
      setIsLoading(false);
    }
  }, [selectedCategory, id]);

  // Da po defaultu bude for_you
  useEffect(() => {
    setSelectedOption("for_you");
  }, []);

  // Trenutno prikazana stranica
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    // Uvek kad se promeni tab da stavi da je page 1
    setCurrentPage(1);
  }, [selectedOption]);
  // Broj postva po stranici
  const postsPerPage = 5;

  // Odredjuje koji je prvi a koji poslednji post koji treba da prikaze
  // Slice-uje njih iz niza
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //Koji postovi ce se prikazati - for_you, new, liked, saved, ili commented
  let currentPosts = [];
  let totalPosts;
  if (selectedOption === "for_you") {
    totalPosts = forYouPostsData.length;
    currentPosts = forYouPostsData.slice(indexOfFirstPost, indexOfLastPost);
  } else if (selectedOption === "liked") {
    currentPosts = likedPostsData.slice(indexOfFirstPost, indexOfLastPost);
    totalPosts = likedPostsData.length;
  } else if (selectedOption === "saved") {
    currentPosts = savedPostsData.slice(indexOfFirstPost, indexOfLastPost);
    totalPosts = savedPostsData.length;
  } else if (selectedOption === "commented") {
    currentPosts = commentedPostsData.slice(indexOfFirstPost, indexOfLastPost);
    totalPosts = commentedPostsData.length;
  } else if (selectedOption === "new") {
    currentPosts = newPostsData.slice(indexOfFirstPost, indexOfLastPost);
    totalPosts = newPostsData.length;
  } else if (selectedOption === "categorized") {
    currentPosts = categorizedPostsData.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    totalPosts = categorizedPostsData.length;
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  let filteredPosts = currentPosts;
  if (searchQuery) {
    const searchQueryLower = searchQuery.toLowerCase();
    filteredPosts = currentPosts.filter((post) => {
      const titleLower = post.title.toLowerCase();
      const contentLower = post.content.toLowerCase();
      return (
        titleLower.includes(searchQueryLower) ||
        contentLower.includes(searchQueryLower)
      );
    });
  }

  // Funkcija za promenu stranice
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // Mapira postove koje dobije iz API-ja u Thumbnail-ove
    <div className={classes.feedContainer}>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Search posts by title or content"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className={classes.tabsContainer}>
        <div
          className={`${classes.tab} ${
            selectedOption === "for_you" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("for_you")}
        >
          For You
        </div>
        <div
          className={`${classes.tab} ${
            selectedOption === "new" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("new")}
        >
          New
        </div>
        <div
          className={`${classes.tab} ${
            selectedOption === "liked" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("liked")}
        >
          Liked
        </div>
        <div
          className={`${classes.tab} ${
            selectedOption === "saved" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("saved")}
        >
          Saved
        </div>
        <div
          className={`${classes.tab} ${
            selectedOption === "commented" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("commented")}
        >
          Commented
        </div>
        <div
          className={`${classes.tab} ${
            selectedOption === "categorized" ? classes.activeTab : ""
          }`}
          onClick={() => setSelectedOption("categorized")}
        >
          Categorized
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />
      {isLoading ? (
        <div className={classes.feedLoadingDiv}>
          <Loader> </Loader>
        </div>
      ) : (
        <div className={classes.thumbnailList}>
          <div className={classes.thumbnailList}>
            {selectedOption === "categorized" && (
              <div className={classes.emptyCategoryMessage}>
                Category: {selectedCategory}
              </div>
            )}
            {filteredPosts.length === 0 ? (
              <div className={classes.emptyCategoryMessage}>
                There doesn't seem to be anything here!
              </div>
            ) : (
              filteredPosts.map((post) => (
                <Thumbnail key={post.id} post={post} />
              ))
            )}
          </div>
        </div>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Feed;
