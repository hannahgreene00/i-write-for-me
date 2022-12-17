import { UserForm } from "./UserForm"

export const Profile = () => {

    const localProjectUser = localStorage.getItem("capstone_user")
    const projectUserObject = JSON.parse(localProjectUser)

    if (projectUserObject) {
        return < UserForm />
    }
 
}