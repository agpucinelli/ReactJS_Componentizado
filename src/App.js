import React from "react";
import Layout from "./Components/layout";
import NoSearch from "./Components/no-search";
import Profile from "./Components/Profile";
import Repositories from "./Components/Repositories";
import { ResetCSS } from "./Global/ResetCSS";
import useGithub from "./hooks/githubHooks";
import GithubProvider from "./providers/github-provider";



const App = () => {
  const {githubState} = useGithub();
    return (  
            
       <Layout>
         {githubState.hasUser ?
         <>
       {githubState.loading ? (
       <p> LOADING...</p>) : ( 
       
       <> 
        <Profile />          
        <Repositories />  

        </>)}
        </> : <NoSearch />}    
      </Layout>

    
    
  );
};

export default App;
