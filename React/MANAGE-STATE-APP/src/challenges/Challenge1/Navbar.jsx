import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Adarsh" });
  const [inputValue, setInputValue] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="Navbar">
      <div>
        <NavLinks
          user={user}
          setUser={setUser}
          handleLogout={handleLogout}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default Navbar;
