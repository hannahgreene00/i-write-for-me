import { Link } from "react-router-dom"

export const Poem = ({ poemObject, currentUser, users, getAllPoems}) => {

    if (poemObject.userPoems.length > 0) {
        const poemUserRelationship = poemObject.userPoems.length[0]
        const fullUser = users.find(user => user.id === poemUserRelationship.userId)

    }

    const userPoems = users.find(user => user.userId === currentUser.id)

    const deleteButton = () => {
        if (!currentUser) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/poems/${poemObject.id}`), {
                    method: "DELETE"
                }
                .then(() => {
                    getAllPoems()
                })

            }} className="poem__delete">Delete</button>
        }
        else {
            return ""
        }

    }

    const closePoem = () => {
        const copy = {
            userId: poemObject.userId,
            title: poemObject.title,
            poem: poemObject.poem,
            date: new Date()
        }

        return fetch(`http://localhost:8088/poems/${poemObject.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(copy)
        })
            .then(response => response.json())
            .then(getAllPoems)

    }

    return <section className="poem" key={`poem--${poemObject.id}`}>
    <header>
        {
            currentUser
            ? `Poem ${poemObject.id}`
            : <Link to={`/poems/${poemObject.id}/edit`}>Edit {poemObject.id}</Link>
        }
    </header>
    <footer>{poemObject.date}</footer>
        {
            poemObject.userPoems.length
        }
        {
            closePoem()
        }
        {
            deleteButton()
        }
  </section>
}