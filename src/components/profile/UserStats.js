import React, { useEffect, useState } from "react";
import classes from "./UserStats.module.css";
import Pagination from "../posts/Pagination";
import Thumbnail from "../posts/Thumbnail";
import Award from "../posts/Award";

function UserStats() {
  const [awards, setAwards] = useState([]);
  // TODO preko apija dohvatiti postove korisnika
  // ovo je mockup
  const userPosts = [
    {
      id: 5,
      category: "Hogwarts",
      content: "Throwback to my amazing vacation.",
      date: "2023-06-22",
      dislikes: 0,
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "16:00:00",
      title: "Title of the Post",
      user: "Sophia Clark (hulrog)",
      user_id: 52,
      awards: [
        {
          award_id: 5,
          award_type: "community",
          name: "Order of Merlin",
          description:
            "This post offers outstanding service to the Wizarding community.",
          amount: 3,
        },
        {
          award_id: 3,
          award_type: "creativity",
          name: "Fanfiction Virtuoso",
          description: "This post is an artwork of fanfiction.",
          amount: 3,
        },
      ],
      comments: [
        {
          comment_id: 1,
          user: "Oliver Harris",
          user_id: 66,
          text: "Looks like a dream destination!",
        },
        {
          comment_id: 2,
          user: "Emma Davis",
          user_id: 63,
          text: "I wish I could go there too.",
        },
      ],
    },
    {
      id: 6,
      category: "Fanfic",
      content: `Hi my name is Ebony Dark'ness Dementia Raven Way and I have long ebony black hair (that's how I got my name) 
      with purple streaks and red tips that reaches my mid-back and icy blue eyes like limpid tears and a lot of people 
      tell me I look like Amy Lee (AN: if u don't know who she is get da hell out of here!). I'm not related to 
      Gerard Way but I wish I was because he's a major fucking hottie. I'm a vampire but my teeth are straight 
      and white. I have pale white skin. I'm also a witch, and I go to a magic school called Hogwarts in England
      where I'm in the seventh year (I'm seventeen). I'm a goth (in case you couldn't tell) and I wear mostly black.
      I love Hot Topic and I buy all my clothes from there. For example today I was wearing a black corset with matching 
      lace around it and a black leather miniskirt, pink fishnets and black combat boots. I was wearing black lipstick,
      white foundation, black eyeliner and red eye shadow. I was walking outside Hogwarts. It was snowing and raining 
      so there was no sun, which I was very happy about. A lot of preps stared at me. I put up my middle finger at them.`,
      date: "2023-06-24",
      dislikes: 323,
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "20:30:00",
      title: "My Immortal",
      user: "Tara Way (ebony)",
      user_id: 323,

      awards: [
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
          amount: 100,
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
          user: "Lily Turner",
          user_id: 2,
          text: "Which band is performing?",
        },
      ],
    },
    {
      id: 7,
      category: "TV Show",
      content: "Thoughts on the latest movie release?",
      date: "2023-06-26",
      dislikes: 4,
      disliked: true,
      house: "Hogwarts",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "12:10:00",
      title: "Title of the Post",
      user: "Olivia Green (hulrog)",
      user_id: 5,
      awards: [
        {
          award_id: 5,
          award_type: "community",
          name: "Order of Merlin",
          description: "",
          amount: 3,
        },
      ],
      comments: [
        {
          comment_id: 1,
          user: "Noah Martinez",
          user_id: 1,
          text: "I loved it! Great storyline.",
        },
        {
          comment_id: 2,
          user: "Ava Rodriguez",
          user_id: 3,
          text: "The cinematography was stunning.",
        },
        {
          comment_id: 3,
          user: "Ethan Hill",
          user_id: 2,
          text: "I was expecting more from it.",
        },
      ],
    },
    {
      id: 10,
      category: "J.K. Rowling",
      content: "Trying out a new recipe today.",
      date: "2023-05-28",
      dislikes: 2,
      disliked: true,
      house: "Hufflepuff",
      likes: 14,
      liked: false,
      popularity: 100,
      saved: true,
      time: "15:45:00",
      title: "Title of the Post",
      user: "Grace Anderson (grace)",
      user_id: 2,
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "William Turner",
          user_id: 500,
          text: "Letme know how it turns out!",
        },
      ],
    },
    {
      id: 11,
      category: "TV Show",
      content: "Thoughts on the latest movie release?",
      date: "2023-09-26",
      dislikes: 4,
      disliked: true,
      house: "Hogwarts",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "12:10:00",
      title: "Title of the Post",
      user: "Olivia Green (hulrog)",
      user_id: 5,
      awards: [
        {
          award_id: 5,
          award_type: "community",
          name: "Order of Merlin",
          description: "",
          amount: 3,
        },
      ],
      comments: [
        {
          comment_id: 1,
          user: "Noah Martinez",
          user_id: 1,
          text: "I loved it! Great storyline.",
        },
        {
          comment_id: 2,
          user: "Ava Rodriguez",
          user_id: 3,
          text: "The cinematography was stunning.",
        },
        {
          comment_id: 3,
          user: "Ethan Hill",
          user_id: 2,
          text: "I was expecting more from it.",
        },
      ],
    },
    {
      id: 12,
      category: "J.K. Rowling",
      content: "Trying out a new recipe today.",
      date: "2023-06-28",
      dislikes: 2,
      disliked: true,
      house: "Hufflepuff",
      likes: 14,
      liked: false,
      popularity: 100,
      saved: true,
      time: "15:45:00",
      title: "Title of the Post",
      user: "Grace Anderson (grace)",
      user_id: 2,
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "William Turner",
          user_id: 500,
          text: "Letme know how it turns out!",
        },
      ],
    },
    {
      id: 14,
      category: "TV Show",
      content: "Thoughts on the latest movie release?",
      date: "2020-06-26",
      dislikes: 4,
      disliked: true,
      house: "Hogwarts",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "12:10:00",
      title: "Title of the Post",
      user: "Olivia Green (hulrog)",
      user_id: 5,
      awards: [
        {
          award_id: 5,
          award_type: "community",
          name: "Order of Merlin",
          description: "",
          amount: 2,
        },
      ],
      comments: [
        {
          comment_id: 1,
          user: "Noah Martinez",
          user_id: 1,
          text: "I loved it! Great storyline.",
        },
        {
          comment_id: 2,
          user: "Ava Rodriguez",
          user_id: 3,
          text: "The cinematography was stunning.",
        },
        {
          comment_id: 3,
          user: "Ethan Hill",
          user_id: 2,
          text: "I was expecting more from it.",
        },
      ],
    },
    {
      id: 22,
      category: "J.K. Rowling",
      content: "Trying out a new recipe today.",
      date: "2023-02-01",
      dislikes: 2,
      disliked: false,
      house: "Hufflepuff",
      likes: 14,
      liked: true,
      popularity: 100,
      saved: true,
      time: "15:45:00",
      title: "Title of the Post",
      user: "Grace Anderson (grace)",
      user_id: 2,
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "William Turner",
          user_id: 500,
          text: "Letme know how it turns out!",
        },
      ],
    },
  ];

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
      if (awardTypeCounts[awardType]) {
        awardTypeCounts[awardType]++;
      } else {
        awardTypeCounts[awardType] = 1;
      }
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
