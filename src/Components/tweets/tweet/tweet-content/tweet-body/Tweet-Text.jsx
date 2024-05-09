import { useContext } from "react";
import { TweetContext } from "../../../../../contexts/tweets";

export default function TweetText({tweet}) {

  return <p className="tweet-text">{tweet.content.text}</p>;
}
