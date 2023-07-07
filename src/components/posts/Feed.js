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
      title: "Title of the Post",
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
      title: "Title of the Post",
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
      title: "Title of the Post",
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
      title: "Title of the Post",
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
      title: "Title of the Post",
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
      popularity: 90,
      date: "2023-06-24",
      time: "20:30:00",
      title: "Title of the Post",
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
      title: "Title of the Post",
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
      title: "Title of the Post",
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
    </div>
  );
}

export default Feed;
