import React, { useEffect, useState } from "react";
import classes from "./UserStats.module.css";
import Pagination from "../posts/Pagination";
import Thumbnail from "../posts/Thumbnail";
import Award from "../posts/Award";
import { useParams } from "react-router";

function UserStats() {
  const { id } = useParams();

  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/getPostsMadeByUser/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/getAllAwards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAwards(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  // Sortiranje po datumu
  const sortedPosts = userPosts.slice().sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB - dateA;
  });

  // Paginacija
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  let currentPosts = [];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Funkcija za promenu stranice
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //STATISTIKE
  const totalPopularity = sortedPosts.reduce(
    (total, post) => total + post.popularity,
    0
  );
  const numberOfPosts = sortedPosts.length;
  const totalComments = sortedPosts.reduce(
    (total, post) => total + post.comments.length,
    0
  );
  const totalAwards = sortedPosts.reduce(
    (total, post) => total + post.awards.length,
    0
  );
  const awardCounts = {};

  sortedPosts.forEach((post) => {
    post.awards.forEach((award) => {
      const awardId = award.award_id;
      awardCounts[awardId] = (awardCounts[awardId] || 0) + award.amount;
    });
  });

  //GRAFIKONI
  const categoryCounts = {};
  userPosts.forEach((post) => {
    const category = post.category;
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });
  const maxCountCategory = Math.max(...Object.values(categoryCounts));

  const awardTypeCounts = {};
  userPosts.forEach((post) => {
    post.awards.forEach((award) => {
      const awardType = award.award_type;
      const awardAmount = award.amount;
      if (!awardTypeCounts.hasOwnProperty(awardType)) {
        awardTypeCounts[awardType] = 0;
      }
      awardTypeCounts[awardType] += awardAmount;
    });
  });
  const maxCountAwardType = Math.max(...Object.values(awardTypeCounts));

  let likesPerMonth = {};
  userPosts.forEach((post) => {
    const [year, month] = post.date.split("-").map(Number);
    const monthKey = `${year}-${month}`;

    if (likesPerMonth[monthKey]) {
      likesPerMonth[monthKey] += post.likes;
    } else {
      likesPerMonth[monthKey] = post.likes;
    }
  });
  const maxCountLikesPerMonth = Math.max(...Object.values(likesPerMonth));
  //sortiranje meseci po datumu
  const sortedMonths = Object.keys(likesPerMonth).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB - dateA;
  });
  return (
    <div className={classes.userStatsContainer}>
      <div className={classes.statsHeader}>
        <p>Total Popularity: {totalPopularity}</p>
        <p>Number of Posts: {numberOfPosts}</p>
        <p>Comments Recieved: {totalComments}</p>
        <p>Awards Received: {totalAwards}</p>
      </div>
      <div className={classes.chartSection}>
        <div className={classes.smallCharts}>
          <div className={classes.smallBarChart}>
            <h3>Posts by category </h3>
            {Object.entries(categoryCounts).map(([category, count]) => {
              const scaleFactor = (count / maxCountCategory) * 100;

              return (
                <div key={category} className={classes.bar}>
                  <div className={classes.barLabel}>{category}</div>
                  <div className={classes.barFillSpace}>
                    <div
                      className={classes.barFill}
                      style={{ width: `${scaleFactor}%` }}
                    >
                      {count}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.smallBarChart}>
            <h3>Awards by type </h3>
            {Object.entries(awardTypeCounts).map(([awardType, count]) => {
              const scaleFactor = (count / maxCountAwardType) * 100;

              return (
                <div key={awardType} className={classes.bar}>
                  <div className={classes.barLabel}>{awardType}</div>
                  <div className={classes.barFillSpace}>
                    <div
                      className={classes.barFill}
                      style={{ width: `${scaleFactor}%` }}
                    >
                      {count}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.bigBarChart}>
          <h3>Likes per month</h3>
          {sortedMonths.map((monthKey) => {
            const count = likesPerMonth[monthKey];
            const scaleFactor = (count / maxCountLikesPerMonth) * 100;

            return (
              <div key={monthKey} className={classes.bar}>
                <div className={classes.barLabel}>{monthKey}</div>
                <div className={classes.barFillSpace}>
                  <div
                    className={classes.barFill}
                    style={{ width: `${scaleFactor}%` }}
                  >
                    {count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.awardCounts}>
        <div className={classes.awardCounts}>
          {awards.map((award) => (
            <Award
              key={award.award_id}
              award_id={award.award_id}
              amount={awardCounts[award.award_id.toString()] || 0}
              name={award.award_name}
              description={award.description}
            />
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userPosts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <div className={classes.thumbnailList}>
        {currentPosts.map((post) => (
          <Thumbnail key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userPosts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default UserStats;
