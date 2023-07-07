import React, { useState } from "react";
import classes from "./Feed.module.css";
import Pagination from "./Pagination";
import Thumbnail from "./Thumbnail";

function Feed() {
  //TODO - get post-ova preko API-ja
  const postsData = [
    {
      id: 1,
      category: "Hogwarts",
      content: "This is the first post.",
      date: "2023-06-15",
      dislikes: 5,
      house: "Ravenclaw",
      likes: 15,
      popularity: 250,
      time: "14:30:00",
      title: "Title of the Post",
      user: "John Doe",
      user_id: 1,
      awards: [{ name: "Best Post" }, { name: "Most Popular" }],
      comments: [
        {
          comment_id: 1,
          user: "Jane Smith",
          user_id: 2,
          text: "Great post!",
        },
        {
          comment_id: 2,
          user: "Mike Johnson",
          user_id: 5,
          text: "I disagree with some points.",
        },
      ],
    },
    {
      id: 2,
      category: "TV Show",
      content: "Check out this amazing photo!",
      date: "2023-06-17",
      dislikes: 2,
      house: "Gryffindor",
      likes: 10,
      popularity: 120,
      time: "10:45:00",
      title: "Title of the Post",
      user: "Alice Brown",
      user_id: 1,
      awards: [{ name: "Photo of the Day" }],
      comments: [
        {
          comment_id: 1,
          user: "Bob Anderson",
          user_id: 2,
          text: "Incredible shot!",
        },
        {
          comment_id: 2,
          user: "Sara Wilson",
          user_id: 3,
          text: "Where was this taken?",
        },
      ],
    },
    {
      id: 3,
      category: "Movies",
      content: "I just finished reading a great book!",
      date: "2023-06-19",
      dislikes: 3,
      house: "Slytherin",
      likes: 20,
      popularity: 180,
      time: "18:15:00",
      title: "Title of the Post",
      user: "Emily Johnson",
      user_id: 1,
      awards: [],
      comments: [
        {
          comment_id: 1,
          user: "David Miller",
          user_id: 5,
          text: "What's the title of the book?",
        },
      ],
    },
    {
      id: 4,
      category: "Books",
      content: "Sharing some exciting news!",
      date: "2023-06-20",
      dislikes: 1,
      house: "Hufflepuff",
      likes: 8,
      popularity: 75,
      time: "09:20:00",
      title: "Title of the Post",
      user: "Michael Wilson",
      user_id: 231,
      awards: [],
      comments: [],
    },
    {
      id: 5,
      category: "Hogwarts",
      content: "Throwback to my amazing vacation.",
      date: "2023-06-22",
      dislikes: 0,
      house: "Gryffindor",
      likes: 12,
      popularity: 200,
      time: "16:00:00",
      title: "Title of the Post",
      user: "Sophia Clark",
      user_id: 52,
      awards: [{ name: "Travel Inspiration" }],
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
      dislikes: 0,
      house: "Slytherin",
      likes: 6,
      popularity: 90,
      time: "20:30:00",
      title: "My Immortal",
      user: "Daniel Thompson",
      user_id: 323,

      awards: [],
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
      house: "Ravenclaw",
      likes: 18,
      popularity: 150,
      time: "12:10:00",
      title: "Title of the Post",
      user: "Olivia Green",
      user_id: 5,
      awards: [{ name: "Movie Buff" }],
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
      id: 8,
      category: "J.K. Rowling",
      content: "Trying out a new recipe today.",
      date: "2023-06-28",
      dislikes: 2,
      house: "Hufflepuff",
      likes: 14,
      popularity: 100,
      time: "15:45:00",
      title: "Title of the Post",
      user: "Grace Anderson",
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

  // Trenutno prikazana stranica
  const [currentPage, setCurrentPage] = useState(1);
  // Broj postva po stranici
  const postsPerPage = 5;

  // Odredjuje koji je prvi a koji poslednji post koji treba da prikaze
  // Slice-uje njih iz niza
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  // Funkcija za promenu stranice
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // Mapira postove koje dobije iz API-ja u Thumbnail-ove
    <div className={classes.feedContainer}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postsData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
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
