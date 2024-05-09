
import TweetContext from "../data/context";
import { useContext } from "react";
import Tweet from "./tweets/Tweet";

export default function Tweets() {
  let [donnee, setData] = useContext(TweetContext)
  let tweets= donnee.tweets
  return (
    <div>
      {tweets.map((tweet, i)=>{
        return(
        <Tweet key={i} data={tweet}/>
      )
      })}
    </div>
    
  );
}
