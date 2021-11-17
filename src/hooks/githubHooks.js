import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () =>
{

    const { githubState, GetUser, GetUserRepos, GetUserStarred} = useContext(GithubContext);


    return { githubState, GetUser, GetUserRepos, GetUserStarred };

};

export default useGithub;