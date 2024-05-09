import { useContext } from "react";
import { Link } from "react-router-dom";
import TweetContext from "../../data/context";

export default function Avatars() {
  let [donnee, setData] = useContext(TweetContext)

  // console.log(avatar["current-user"].src);
  return (
    <Link to='' className="avatar">
      <img src={donnee["current-user"].src}/>

      {/* <img src={avatar["current-user"].src} alt="Profil d'utilisateur" /> */}
    </Link>
  );
}
