import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const PoemList = ({ searchTermState }) => {
    const [poems, setPoems] = useState([])
    const [filteredPoems, setFiltered] = useState([])
    const navigate = useNavigate
}

const localProjectUser = localStorage.getItem("capstone_user");
const projectUserObject = JSON.parse(localProjectUser)

    useEffect(
        () => {
            const searchedPoems = poems.filter(poem => {
                return poem.description.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedPoems)
        },
        [ searchTermState ]
    )

    useEffect(
        () => fetch(``)
        .then(response => response.json())
        .then((poemArray) => {
            setPoems(poemArray)
        })

        ,
        []
    )

    