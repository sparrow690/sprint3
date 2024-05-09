import { useForm } from "react-hook-form";
import TweetEditorButtons from "./tweet-editor-form/Tweet-Editor-Buttons";
import TweetEditorInput from "./tweet-editor-form/Tweet-Editor-Input";
import { useContext, useRef } from "react";
import TweetContext from "../../data/context";

export default function TweetEditorForm() {
  const { register, handleSubmit, reset } = useForm();
  const [donnee, setData] = useContext(TweetContext);
  const input = useRef();

  const onSubmit = (dataForm) => {
    const newTweet = {
      user: donnee["current-user"],
      content: dataForm,
      actions: {
        comments: 0,
        retweet: 0,
        like: 0,
      },
    };
    let dataTweets = {...donnee,tweets:[newTweet,...donnee.tweets]}

    setData(dataTweets);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tweet-editor-form">
      <TweetEditorInput register={register} ref={input} />
      <TweetEditorButtons />
    </form>
  );
}
