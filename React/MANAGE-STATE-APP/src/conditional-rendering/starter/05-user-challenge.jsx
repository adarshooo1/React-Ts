import { useState } from "react";

export const UserChallenge = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Adarsh Singh" });
  }

  function logout() {
    setUser(null);
  }

  return (
    // // Way 1:
    // <div className="container">
    //   {/* If isLogin Is True and Get Logged In */}
    //   {isLogin && (
    //     <div className="container">
    //       <div>Hello {user.name}. yours welcome!</div>
    //       {console.log(user.name)}
    //       <button
    //         className="bttn"
    //         onClick={() => {
    //           setIsLogin(!isLogin);
    //           logout();
    //         }}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //     // Logout is false , then it will not render this component
    //   )}

    //   {/* Logout To Login Code Here */}

    //   {!isLogin && (
    //     <div className="container">
    //       <h1>You have logged Out. Please Login!</h1>
    //       {console.log(user)}
    //       <button
    //         className="bttn"
    //         onClick={() => {
    //           setIsLogin(!isLogin);
    //           login();
    //         }}
    //       >
    //         Login
    //       </button>
    //     </div>
    //     // If logout is false, this this will make it true and render this component and show user to isLogin First
    //   )}
    // </div>

    // // Way 2:
    <div>
      {user ? (
        <div className="container">
          <h1>Welcome {user.name}</h1>
          <button
            className="bttn"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="container">
          <h1>Please Login!</h1>
          <button
            className="bttn"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
