import { useContext } from "react";
import TweetImage from "./tweet-body/Tweet-Image";
import TweetText from "./tweet-body/Tweet-Text";
import TweetTitle from "./tweet-body/Tweet-Title";
import { TweetContext } from "../../../../contexts/tweets";

export default function TweetBody({tweet}) {
  
  return (
    <div className="tweet-body">
      <TweetTitle  tweet={tweet}/>
      <TweetText tweet={tweet} />
      {tweet.content.srcImage && <TweetImage image={tweet.content.srcImage} />}
    </div>
  );
}
