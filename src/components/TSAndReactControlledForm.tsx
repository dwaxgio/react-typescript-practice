import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const TSAndReactControlledForm = () => {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>TS - REACT - Controlled form API</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TSAndReactControlledForm;
