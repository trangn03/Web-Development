import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.user.users?.allUsers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dummy data
  const userData = [
    {
      username: "user1234",
    },
    
  ];

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch);
    }
  }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user"> Delete </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;

// Optional chaining (?) is used to prevent errors when accessing nested properties.
// Ternary operators are used to conditionally render elements.