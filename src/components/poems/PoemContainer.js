import { useState } from "react"
import { PoemList } from "./PoemList"
import { PoemSearch } from "./PoemSearch"

export const PoemContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <PoemSearch setterFunction={setSearchTerms} />
    <PoemList searchTermState={searchTerms} />
    
    </>
}