import TweetActions from "./tweet-content/Tweet-Actions";
import TweetBody from "./tweet-content/Tweet-Body";

export default function TweetContent({tweet}) {
  return (
    <div className="tweet-content">
      <TweetBody tweet={tweet} />
      <TweetActions tweet={tweet}/>
    </div>
  );
}
