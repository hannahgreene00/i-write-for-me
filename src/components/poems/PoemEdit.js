import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const PoemEdit = () => {
    const [poem, assignPoem] = useState({
        title: "",
        poem: ""
    })
    const { poemId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/poems/${poemId}`)
            .then(response => response.json())
            .then((data) => {
                assignTicket(data)
            })
    }, [poemId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/poems/${poem.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(poem)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/poems")
            })
    }


    return <form className="poemForm">
        <h2 className="poemForm__title">Edit Poem</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="poem">Poem:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={poem.poem}
                    onChange={
                        (evt) => {
                            const copy = { ...poem }
                            copy.poem = evt.target.value
                            assignPoem(copy)
                        }
                    }>{poem.poem}</textarea>
            </div>
        </fieldset>

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edit
        </button>
    </form>
}