import React, { useState } from "react";
import classes from "./Feed.module.css";
import Pagination from "./Pagination";
import Thumbnail from "./Thumbnail";

function Feed() {
  //TODO - get post-ova preko API-ja
  const postsData = [
    {
      id: 1,
      user: "John Doe",
      likes: 15,
      dislikes: 5,
      content: "This is the first post.",
      popularity: 250,
      date: "2023-06-15",
      time: "14:30:00",
      awards: [{ name: "Best Post" }, { name: "Most Popular" }],
      comments: [
        {
          comment_id: 1,
          user: "Jane Smith",
          text: "Great post!",
        },
        {
          comment_id: 2,
          user: "Mike Johnson",
          text: "I disagree with some points.",
        },
      ],
    },
    {
      id: 2,
      user: "Alice Brown",
      likes: 10,
      dislikes: 2,
      content: "Check out this amazing photo!",
      popularity: 120,
      date: "2023-06-17",
      time: "10:45:00",
      awards: [{ name: "Photo of the Day" }],
      comments: [
        {
          comment_id: 1,
          user: "Bob Anderson",
          text: "Incredible shot!",
        },
        {
          comment_id: 2,
          user: "Sara Wilson",
          text: "Where was this taken?",
        },
      ],
    },
    {
      id: 3,
      user: "Emily Johnson",
      likes: 20,
      dislikes: 3,
      content: "I just finished reading a great book!",
      popularity: 180,
      date: "2023-06-19",
      time: "18:15:00",
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "David Miller",
          text: "What's the title of the book?",
        },
      ],
    },
    {
      id: 4,
      user: "Michael Wilson",
      likes: 8,
      dislikes: 1,
      content: "Sharing some exciting news!",
      popularity: 75,
      date: "2023-06-20",
      time: "09:20:00",
      awards: [],
      comments: [],
    },
    {
      id: 5,
      user: "Sophia Clark",
      likes: 12,
      dislikes: 0,
      content: "Throwback to my amazing vacation.",
      popularity: 200,
      date: "2023-06-22",
      time: "16:00:00",
      awards: [{ name: "Travel Inspiration" }],
      comments: [
        {
          comment_id: 1,
          user: "Oliver Harris",
          text: "Looks like a dream destination!",
        },
        {
          comment_id: 2,
          user: "Emma Davis",
          text: "I wish I could go there too.",
        },
      ],
    },
    {
      id: 6,
      user: "Daniel Thompson",
      likes: 6,
      dislikes: 0,
      content: "Excited for the upcoming concert!",
      popularity: 90,
      date: "2023-06-24",
      time: "20:30:00",
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "Lily Turner",
          text: "Which band is performing?",
        },
      ],
    },
    {
      id: 7,
      user: "Olivia Green",
      likes: 18,
      dislikes: 4,
      content: "Thoughts on the latest movie release?",
      popularity: 150,
      date: "2023-06-26",
      time: "12:10:00",
      awards: [{ name: "Movie Buff" }],
      comments: [
        {
          comment_id: 1,
          user: "Noah Martinez",
          text: "I loved it! Great storyline.",
        },
        {
          comment_id: 2,
          user: "Ava Rodriguez",
          text: "The cinematography was stunning.",
        },
        {
          comment_id: 3,
          user: "Ethan Hill",
          text: "I was expecting more from it.",
        },
      ],
    },
    {
      id: 8,
      user: "Grace Anderson",
      likes: 14,
      dislikes: 2,
      content: "Trying out a new recipe today.",
      popularity: 100,
      date: "2023-06-28",
      time: "15:45:00",
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "William Turner",
          text: "Let us know how it turns out!",
        },
      ],
    },
  ];

  console.log(postsData);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.feedContainer}>
      {currentPosts.map((post) => (
        <Thumbnail key={post.id} post={post} />
      ))}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postsData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Feed;
