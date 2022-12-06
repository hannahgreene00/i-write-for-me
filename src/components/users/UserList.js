import { useEffect } from "react"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088`)
            .then(response => response.json())
            .then((userArray) => {
                setUsers(userArray)
            })
        },
        []
    )

    return <article className="users">
        {
            users.map(user => {
                return <section className="user" key={`user--${user.id}`}>
                    <div>Name: {user.name}</div>
                    <div>Email: {user.email}</div>
                </section>
            })
        }
    </article>
}