import React, { useState } from "react";

const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         <h1>Nabeel</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Guest</h1>
  //       </div>
  //     );
  //   }

  return (
    <div>
      {isLoggedIn && <h1>Nabeel</h1>}
      {!isLoggedIn && <h1>Guest</h1>}
    </div>
  );
};
export default UserGreeting;
