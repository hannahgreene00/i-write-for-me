import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const PoemForm = () => {
    
    const [poem, setPoem] = useState({
        poem: "",
        title: "",
        date: ""
    })

    const navigate = useNavigate()

    const localProjectUser = localStorage.getItem("capstone_user");
    const projectUserObject = JSON.parse(localProjectUser);

    const handleSaveButtonClick = (event) => {
        const poemToSendToAPI = {
            userId: projectUserObject.id,
            poem: poem.poem,
            datePosted: poem.date
        }
        event.preventDefault()
        sendPoems(poemToSendToAPI)
    }

   

    const sendPoems = async (poemToSendToAPI) => {
        const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(poemToSendToAPI)
    }


    const response = await fetch(`http://localhost:8088/poems`, options);
    await response.json()
        navigate("/poems")
    }



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
                            setPoem(copy)
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