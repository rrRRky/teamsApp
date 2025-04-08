import { useEffect, useState } from "react";
import * as microsoftTeams from "@microsoft/teams-js";

interface UserInfo {
  displayName?: string;
  id?: string;
  loginHint?: string;
  userPrincipalName?: string;
}

const TeamsApp: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);


  useEffect(() => {
    microsoftTeams.app.initialize()
      .then(() => {
        microsoftTeams.app.getContext()
          .then((ctx) => {
            console.log("Teams Context:", ctx);
            if (ctx.user) {
              setUserInfo(ctx.user);
            }
          })
          .catch((error) => {
            console.error("Error getting Teams context:", error);
          });
      })
      .catch((error) => {
        console.error("Teams SDK Initialization Error:", error);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to Teams App</h2>
      {userInfo ? (
        <>
        <h3>User detail</h3>
        <p>User Email Id: {userInfo.userPrincipalName}</p>
        <p>User Teams Id: ({userInfo.id})</p>
        {console.log("User:" , userInfo)}
        </>
        
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default TeamsApp;
