import "./App.css";
// import { ToggleChallenge } from "./conditional-rendering/starter/04-toggle-challenge";
// import { UserChallenge } from "./conditional-rendering/starter/05-user-challenge";
// import { CleanupFunction } from "./hooks/useEffect/starter/05-cleanup-function";

// import Navbar from "./Project-Structure/starter/Navbar";
// import Home from "./Project-Structure/starter/Pages/Home";
// import About from "./Project-Structure/starter/Pages/About";

// import { Home, About } from "./Project-Structure/starter/Pages";

import Example from "./Project-Structure/starter/Example";
import { Test } from "./Project-Structure/final/Test";
function App() {
  // return <ToggleChallenge />
  // return <UserChallenge />;
  // return <CleanupFunction />;
  return (
    // <Navbar />
    // <div className="container">
    //   <About />
    //   <Home />
    // </div>
    <div className="container">
      <Example />
      <Test />
    </div>
  );
}

export default App;
