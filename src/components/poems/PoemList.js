import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Poems.css"

export const PoemList = ({ searchTermState }) => {
  const [poems, setPoems] = useState([])
  const [filteredPoems, setFiltered] = useState([])
  const [openOnly, setUpdateOpenOnly] = useState(false)
  const navigate = useNavigate()

  const localProjectUser = localStorage.getItem("capstone_user")
  const projectUserObject = JSON.parse(localProjectUser)

  useEffect(
  () => {
  const searchedPoems = poems.filter(poem => {
        return poem.poem.toLowerCase().startsWith(searchTermState.toLowerCase())
      })
      setFiltered(searchedPoems)
    },
    [ searchTermState ]

  )

  useEffect(
  () => {
    fetch(`http://localhost:8088/poems`)
      .then(response => response.json())
      .then((poemArray) => {
          setPoems(poemArray)
      })

    },
      []
  )



  useEffect(
    () => {
      if (projectUserObject.user) {
        setFiltered(poems)
      }
      else {
        const myPoems = poems.filter(poem => poem.userId === projectUserObject.id)
        setFiltered(myPoems)
      }
    },
    [poems]
  )


  useEffect(
    () => {
      if (openOnly) {
        const openPoemArray = poems.filter(poem => {
          return poem.userId === projectUserObject.id && poem.datePosted === ""
        })
        setFiltered(openPoemArray)
      }
      else {
        const myPoems = poems.filter(poem => poem.userId === projectUserObject)
        setFiltered(myPoems)
      }

    },
    [openOnly]
  )

  return <>
    {
      projectUserObject.user

        ? <>
          <button onClick={() => navigate("/poem/create")}>Write Poem</button>
          <button onClick={() => setUpdateOpenOnly(true)}>Open Poems</button>
        </>
        : <>
          <button onClick={() => setUpdateOpenOnly(false)}>All My Poems</button>
        </>
    }


    <h2>Poems</h2>
    <article className="poems">
      {
        poems.map(
          (poem) => {
            return <section className="poem">
              <header>{poem.poem}</header>
            </section>
          }
        )
      }
    </article>
  </>
}