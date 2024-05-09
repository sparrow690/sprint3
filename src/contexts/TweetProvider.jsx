import { useState } from "react"
import TweetContext from "../data/context"
import data from "../data/initial-data.json"

const TweetProvder=({children})=>{
    let [donnee, setData] = useState(data)
    return (
        <TweetContext.Provider value={[donnee, setData]}>
            {children}
        </TweetContext.Provider>)
}

export default TweetProvder