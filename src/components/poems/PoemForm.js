import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const PoemForm = () => {
    
    const [poem, update] = useState({
        poem: ""
    })

    const navigate = useNavigate()

    const localProjectUser = localStorage.getItem("capstone_user");
    const projectUserObject = JSON.parse(localProjectUser);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
    }

    const poemToSendToAPI = {
        userId: projectUserObject.id,
        poem: poem.poem,
        datePosted: poem.date
    }

    return fetch(``, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(poemToSendToAPI)
    })
    .then(response => response.json())
    .then (() => {
        navigate("/poems")
    })

    return (
        <form className="poemForm">
            <h2 className="poemForm__title">Write New Poem</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="poem">Poem</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="write poem here"
                    value={poem.poem}
                    onChange={
                        (evt) => {
                            const copy = {...poem}
                            copy.poem = evt.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <button
                onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}}
                className="btn btn-primary">
                    Submit Poem
                </button>
            </fieldset>
        </form>
    )

}