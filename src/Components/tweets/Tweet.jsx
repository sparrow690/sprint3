import { TweetContext } from "../../contexts/tweets";
import TweetAvatar from "./tweet/Tweet-Avatar";
import TweetContent from "./tweet/Tweet-Content";

export default function Tweet({ data }) {
  return (
    <div className="tweet">
     
        <TweetAvatar tweet={data} />
        <TweetContent tweet={data} />
     
    </div>
  );
}
