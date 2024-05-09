import { useContext } from "react";
import { Link } from "react-router-dom";


export default function TweetAvatar({tweet}) {
  return (
    <Link to={`/${tweet.user.userName}`}>
      <img src={tweet.user.src} alt="Profil de ..." className="tweet-avatar" />
    </Link>
  );
}
 