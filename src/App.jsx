import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      console.log(userData);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }
  }, []);

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      // console.log("this is admin");
      // console.log(user);
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (item) => email == item.email && password == item.password
      );
      // console.log("this is employee");
      // console.log(user);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid credentials");
      // console.log("Invalid credentials");
    }
  };

  return (
    <div className="">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />) : ("")}
    </div>
  );
};

export default App;
