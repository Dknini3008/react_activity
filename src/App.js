import React from "react";
import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/Main"
import Badge from "./components/Badge"


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Badge 
          profile_picture={"https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ></Badge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
