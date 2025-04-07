import { useEffect, useState } from "react";
import * as microsoftTeams from "@microsoft/teams-js";

interface UserInfo {
  displayName?: string;
  id?: string;
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
        <p>User: {userInfo.displayName} ({userInfo.id})</p>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default TeamsApp;
