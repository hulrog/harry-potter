import React, { useState } from "react";
import classes from "./Feed.module.css";
import Pagination from "./Pagination";
import Thumbnail from "./Thumbnail";

function Feed() {
  const [selectedOption, setSelectedOption] = useState("for_you"); // Default state

  //TODO - poziv za svaki API na useEffect - get post-ova preko API-ja
  const forYouPostsData = [
    {
      id: 1,
      category: "Hogwarts",
      content: "This is the first post.",
      date: "2023-06-15",
      dislikes: 5,
      disliked: false,
      house: "Ravenclaw",
      likes: 15,
      liked: true,
      popularity: 250,
      saved: true,
      time: "14:30:00",
      title: "Title of the Post",
      user: "John Doe (0)",
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
      disliked: false,
      house: "Gryffindor",
      likes: 10,
      liked: true,
      popularity: 120,
      saved: true,
      time: "10:45:00",
      title: "Title of the Post",
      user: "Alice Brown (hulrog)",
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
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "18:15:00",
      title: "Title of the Post",
      user: "Emily Johnson (hulrog)",
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
      disliked: false,
      house: "Hufflepuff",
      likes: 8,
      liked: false,
      popularity: 75,
      saved: true,
      time: "09:20:00",
      title: "Title of the Post",
      user: "Michael Wilson (hulrog)",
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
      dislikes: 323,
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "20:30:00",
      title: "My Immortal",
      user: "Tara Way (enoby)",
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
      disliked: true,
      house: "Hufflepuff",
      likes: 14,
      liked: false,
      popularity: 100,
      saved: true,
      time: "15:45:00",
      title: "Title of the Post",
      user: "Grace Anderson (hulrog)",
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
  const likedPostsData = [
    {
      id: 8,
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
      user: "Grace Anderson (hulrog)",
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
  const savedPostsData = [
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
      dislikes: 323,
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "20:30:00",
      title: "My Immortal",
      user: "Daniel Thompson (hulrog)",
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
  ];
  const commentedPostsData = [
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
      user: "Sophia Clark (schone)",
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
      dislikes: 323,
      disliked: true,
      house: "Slytherin",
      likes: 20,
      liked: false,
      popularity: 180,
      saved: true,
      time: "20:30:00",
      title: "My Immortal",
      user: "Daniel Thompson (hulrog)",
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
      id: 8,
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
      user: "Grace Anderson (0)",
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

  //Koji postovi ce se prikazati - for_you, liked, saved, ili commented
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
  }

  // Funkcija za promenu stranice
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // Mapira postove koje dobije iz API-ja u Thumbnail-ove
    <div className={classes.feedContainer}>
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
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
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
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Feed;
