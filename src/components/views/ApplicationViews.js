import { UserViews } from "./UserViews";

export const ApplicationViews = () => {
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);

  if (projectUserObject) {
    return <UserViews />
  }
};

