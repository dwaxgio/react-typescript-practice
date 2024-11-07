import React, { createContext, useContext } from "react";

// const UserContext = createContext();

// function UserProvider({ children }) {
//   const user = { name: "Alice" };
//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// }

// function UserProfile() {
//   const user = useContext(UserContext);
//   return <p>User: {user.name}</p>;
// }

const IContextAPI = () => {
  return (
    <div>
      <h2>Context API</h2>
      {/* {UserProfile()} */}
    </div>
  );
};

export default IContextAPI;
