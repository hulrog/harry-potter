import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Post.module.css";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";

function Post() {
  // vadi id sa use params pa po tom id-ju ce naci post
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO poziv api za individualni post

  // TODO mockup jednog posta
  const [post, setPost] = useState({
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
    user: "Tara Way (enoby)",
    user_id: 323,

    awards: [],
    comments: [
      {
        comment_id: 1,
        user: "Raven Girl (raven)",
        user_id: 2,
        text: "Which band is performing?",
      },
      {
        comment_id: 2,
        user: "Brittney Prep (0)",
        user_id: 3,
        text: "OMG EBOBY SUX",
      },
      {
        comment_id: 3,
        user: "Sirius Black (dog)",
        user_id: 3,
        text: "U r so beautiful",
      },
      {
        comment_id: 4,
        user: "Sirius Black (dog)",
        user_id: 3,
        text: "U r so beautiful",
      },
      {
        comment_id: 5,
        user: "Sirius Black (dog)",
        user_id: 3,
        text: "U r so beautiful",
      },
    ],
  });

  // Klik na pozadinu vraca nazad a propagacija ovog eventa je zaustavljena za ostatak posta
  const handleBackgroundClick = () => {
    window.history.back();
  };
  const handlePostContainerClick = (e) => {
    e.stopPropagation();
  };

  // Handler za klik na ime - vodi na profil tog korisnika
  const handleCommentProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  // Dodavanje komentara
  // TODO poziv api-ja za dodavanje komentara
  const [newCommentText, setNewCommentText] = useState("");
  const [containsProfanity, setContainsProfanity] = useState(false);

  // Funkcija koja proverava da li komentar sadrzi ruzne reci
  const checkProfanity = async (text) => {
    const apiUrl = `https://www.purgomalum.com/service/containsprofanity?text=${encodeURIComponent(
      text
    )}`;
    try {
      const response = await fetch(apiUrl);
      const containsProfanity = await response.text();
      // Ovaj api vraca "true" ako sadrzi i "false" ako ne sadrzi ruzne reci
      return containsProfanity === "true";
    } catch (error) {
      console.error("Error checking profanity:", error);
      return false;
    }
  };

  const handleSubmitComment = async () => {
    // Provera da li sadrzi ruzne reci
    // pauzira egzekuciju ove async funkcije dok se checkProfanity funkcija ne izvrsi
    setContainsProfanity(false);
    const isProfane = await checkProfanity(newCommentText);
    if (isProfane) {
      setContainsProfanity(true);
      return;
    }
    const newComment = {
      comment_id: post.comments.length + 1,
      user: "Name surname", // TODO zameniti imenom i prezimenog trenutnog
      user_id: 123, // TODO zameniti ID-jem trenutnog
      text: newCommentText,
    };

    // Updatuje state
    const updatedPost = {
      ...post,
      comments: [...post.comments, newComment],
    };
    setPost(updatedPost);

    setNewCommentText(""); // Clear polja
  };
  // Obrtanje da prvo budu prikazani najnoviji
  const reversedComments = [...post.comments].reverse();

  // TODO prikaz kuce ili nekih drugih informacija o korisniku? poziv apija za korisnike
  // koji ostavljaju komentare da se prikazu neke dodatne informacije osim imena?
  return (
    <div className={classes.background} onClick={handleBackgroundClick}>
      <div className={classes.postContainer} onClick={handlePostContainerClick}>
        <PostInfo post={post}></PostInfo>
        <div className={classes.contentSection}>
          <p className={classes.content}>{post.content}</p>
        </div>
        <PostStats post={post}></PostStats>
        <div className={classes.detailsSection}>
          <span className={classes.id}> ID:{id}</span>
          <span className={classes.popularity}>
            Popularity: {post.popularity}
          </span>
        </div>
        <div className={classes.commentsSection}>
          <div className={classes.newComment}>
            <input
              className={containsProfanity ? classes.flashRed : ""}
              onChange={(e) => setNewCommentText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmitComment()}
              placeholder="Add a comment..."
              type="text"
              value={newCommentText}
            />
            <ButtonRow>
              <Button
                text="Comment"
                type="submit"
                onClick={handleSubmitComment}
              >
                Submit
              </Button>
            </ButtonRow>
          </div>
          <div className={classes.scrollableComments}>
            {reversedComments.map((comment) => (
              <div key={comment.comment_id} className={classes.comment}>
                <span
                  className={classes.commentUser}
                  onClick={() => handleCommentProfileClick(comment.user_id)}
                >
                  {comment.user.includes("(0)") ? (
                    "[deleted]"
                  ) : (
                    <span>{comment.user}</span>
                  )}
                </span>
                <span className={classes.commentText}>{comment.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
