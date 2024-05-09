import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TweetContext from "../data/context";
import Tweet from "../Components/tweets/Tweet";

export default function Profile() {
  const { userName } = useParams();
  const [donnee,setData] = useContext(TweetContext);
  console.log(useContext(TweetContext))
  return (
    <div>
      <h1 className="my-[10vh] mx-auto text-center text-6xl">
        Profil de @{userName}
      </h1>
      {donnee.tweets
        .filter((e) => e.user.userName == userName)
        .map((el, i) => (
          <Tweet key={i} data={el} />
        ))}
    </div>
  );
}
