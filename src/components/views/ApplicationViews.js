import { Outlet, Route, Routes } from "react-router-dom"
import { UserList } from "../users/UserList"
import { PoemContainer } from "../poems/PoemContainer"
import { PoemForm } from "../poems/PoemForm"

export const ApplicationViews = () => {
  // const localProjectUser = localStorage.getItem("capstone_user");
  // const projectUserObject = JSON.parse(localProjectUser);

    return (
        <Routes>
            <Route path="/poems" element={
                <>
                    <h1>I Write For Me</h1>
                    <div>A place to write your poetry without judgement</div>

                    <Outlet />
                </>
            }>
                <Route path="submitpoems" element={ <PoemForm />} />
                <Route path="users" element={ <UserList />} />
                <Route path="submitpoems" element={ <PoemEdit />} />
                <Route path="poems" element={ <PoemContainer />} />
                <Route path="profile" element={ <Profile />} />


            </Route>
        </Routes>
    )
};
