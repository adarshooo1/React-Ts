import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// Custom Hook for useContext
export const useUserContext = () => {};

const Navbar = () => {
  const [user, setUser] = useState({ name: "Adarsh" });
  const [inputValue, setInputValue] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider
      value={{ user, setUser, inputValue, setInputValue, handleLogout }}
    >
      <div className="Navbar">
        <div>
          <NavLinks />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
