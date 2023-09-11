import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Post.module.css";
import PostInfo from "./PostInfo";
import PostStats from "./PostStats";
import Button from "../layout/Button";
import ButtonRow from "../layout/ButtonRow";
import AddAwardModal from "./AddAwardModal";
import Award from "./Award";
import { useAuth } from "../auth/AuthContext";

function Post() {
  // vadi id sa use params pa po tom id-ju ce naci post
  const { id } = useParams();
  const navigate = useNavigate();

  const [isAddAwardModalOpen, setIsAddAwardModalOpen] = useState(false);
  const { currentUser } = useAuth();

  // TODO  ovde isto treba API i u useEffectu postaviti koje awardove je trenutni user vec dao ovom postu
  const [awardedAwards, setAwardedAwards] = useState([]);
  // TODO poziv api za individualni post
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

    awards: [
      {
        award_id: 1,
        award_type: "knowledge",
        name: "Historian of Magic",
        description:
          "This post contributes to or demonstrates vast knowledge of the Wizarding World's history and lore.",
        amount: 1,
      },
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
        amount: 25,
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
      user: "Name surname (username)", // TODO zameniti imenom i prezimenog i usernamom trenutnog
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

  // Nagradjivanje
  const handleOpenAddAwardModal = () => {
    setIsAddAwardModalOpen(true);
  };
  const handleCloseAddAwardModal = () => {
    setIsAddAwardModalOpen(false);
  };

  const handleAddAwards = (awardsToAdd) => {
    const newAwards = awardsToAdd.filter(
      (award) =>
        !awardedAwards.some(
          (awardedAward) => awardedAward.award_id === award.award_id
        )
    );

    if (newAwards.length > 0) {
      setAwardedAwards((prevAwards) => [...prevAwards, ...newAwards]);
    }
  };

  const handleDeleteClick = () => {
    //poziv API-ja za delete
    navigate("/posts");
  };

  const handleEditClick = () => {
    navigate("/edit-post/" + id);
  };

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
        {currentUser.role === "admin" && (
          <div className={classes.detailsSection}>
            <span className={classes.id}> ID: {id}</span>
            <span className={classes.popularity}>
              Popularity: {post.popularity}
            </span>
          </div>
        )}
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
              ></Button>
              <Button
                text="Award"
                type="submit"
                onClick={handleOpenAddAwardModal}
              />
            </ButtonRow>
            <div className={classes.awardedAwards}>
              {awardedAwards.length > 0 &&
                awardedAwards.map((awardedAward) => (
                  <Award
                    key={awardedAward.award_id}
                    award_id={awardedAward.award_id}
                    description={awardedAward.description}
                    name={awardedAward.name}
                  />
                ))}
            </div>
          </div>
          {isAddAwardModalOpen && (
            <AddAwardModal
              onClose={handleCloseAddAwardModal}
              onAddAward={handleAddAwards}
              awardedAwards={awardedAwards}
            />
          )}

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
        {(currentUser.role === "admin" || currentUser.id === post.user_id) && (
          <ButtonRow>
            <Button
              text="Delete"
              type="remove"
              onClick={handleDeleteClick}
            ></Button>
            <Button text="Edit" type="submit" onClick={handleEditClick} />
          </ButtonRow>
        )}
      </div>
    </div>
  );
}

export default Post;
