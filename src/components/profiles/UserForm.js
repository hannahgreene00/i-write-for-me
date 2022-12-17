import { useEffect, useState } from "react"

export const UserForm = () => {
    
    const [profile, updateProfile] = useState({
        name: "",
        email:"",
        userId: 0
      })

    const localProjectUser = localStorage.getItem("capstone_user")
    const projectUserObject = JSON.parse(localProjectUser)


    useEffect(() => {
        fetch(`http://localhost:8088/users?userId=${projectUserObject.id}`)
        .then(response => response.json())
        .then((data) => {
            const userObject = data[0]
            updateProfile(userObject)
        })
    }, [])
    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users?userId=${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(response => response.json())
            .then(() => {
                
            })
    }

    return (
        <form className="profile">
            <h2 className="profile__title">New Poem</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.name}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                copy.specialty = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.email}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                copy.rate = evt.target.value
                                updateProfile(copy) 
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
    )
}