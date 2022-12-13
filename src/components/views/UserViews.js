import { Outlet, Route, Routes } from "react-router-dom"
import { UserList } from "../users/UserList"
import { PoemContainer } from "../poems/PoemContainer"
import { PoemForm } from "../poems/PoemForm"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>I Write For Me</h1>
                    <div>A place to write your poetry without judgement</div>

                    <Outlet />
                </>
            }>
                <Route path="" element={ <PoemContainer />} />
                <Route path="users" element={ <UserList />} />

            </Route>
        </Routes>
    )
}