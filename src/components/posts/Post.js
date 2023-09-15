import { useEffect, useState } from "react";
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
  const currentUserId = currentUser.id;
  const [post, setPost] = useState(null);

  // Ovo je za trentuno otvaranje, a ako nije dat award onda sa backa
  const [awardedAwards, setAwardedAwards] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/getPostById/${id}/${currentUserId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [currentUserId, id]);

  // Klik na pozadinu vraca nazad a propagacija ovog eventa je zaustavljena za ostatak posta
  const handleBackgroundClick = () => {
    navigate("/posts");
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
      user: currentUser.user,
      user_id: currentUser.id,
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
  let reversedComments = [];
  if (post) {
    reversedComments = [...post.comments].reverse();
  }

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
    const requestData = {
      post_id: id,
    };

    fetch("http://127.0.0.1:8000/api/deletePost", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    navigate(`/post/${id}`);
    navigate("/posts");
  };

  const handleEditClick = () => {
    navigate("/edit-post/" + id);
  };

  // TODO prikaz kuce ili nekih drugih informacija o korisniku? poziv apija za korisnike
  // koji ostavljaju komentare da se prikazu neke dodatne informacije osim imena?
  return (
    <div className={classes.background} onClick={handleBackgroundClick}>
      {post && (
        <div
          className={classes.postContainer}
          onClick={handlePostContainerClick}
        >
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

          <div className={classes.commentsSection}></div>
          {(currentUser.role === "admin" ||
            currentUser.id === post.user_id) && (
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
      )}
    </div>
  );
}

export default Post;
