import UserClass from "./UserClass";
import { useState } from "react";

const About = () => {
  const [name] = useState("Shailendra");
  const [location] = useState("Noida");
  const [contact] = useState("shailendra123");
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page</h2>
      <UserClass name={name} location={location} contact={contact} />
    </div>
  );
};

export default About;
