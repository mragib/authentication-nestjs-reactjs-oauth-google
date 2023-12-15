import { useState } from "react";
import { useUser } from "./useUser";

function Home() {
  const message = useState("You are not logged in");
  const { user, isGetingUser } = useUser();
  if (isGetingUser) return <p>Loading</p>;

  return (
    <h1 className="text-center mt-5">
      {user?.first_name ? `Welcome ${user.first_name}` : message}
    </h1>
  );
}

export default Home;
