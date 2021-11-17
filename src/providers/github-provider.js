import React, { children, createContext, useCallback, useState} from 'react';

import Api from '../services/api';


export const GithubContext = createContext({
    loading:false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) =>
 {
    const [githubState, setgithubState] = useState({
        hasUser: false,
        user: {
            id: undefined,
            avatar_url: undefined,
            loading:false,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            bio: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const GetUser = (username) =>
    {
        Api.get(`users/${username}`).then(( { data           
        }) => 
        {
            setgithubState((prevState) => ({ 
            ...prevState,
            hasUser: true,
            loading: !prevState.loading,
            user: {
            id: data.id,
            avatar_url: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            bio: data.bio,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            },
        }));

        }).finally( () => {
            setgithubState ((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));

        })
    };

//API REPOS

    const GetUserRepos = (username) =>
    {
        Api.get(`users/${username}/repos`).then(( { data           
        }) => 
        {
            setgithubState((prevState) => ({

            ...prevState,           
            repositories: data,
            
        }));
        });
    };


    const GetUserStarred = (username) =>
    {
        Api.get(`users/${username}/starred`).then(( { data           
        }) => 
        {
            setgithubState((prevState) => ({

            ...prevState,           
            starred: data,
            
        }));
        });
    };
        const contextValue = {
            githubState,
            GetUser: useCallback((username) => GetUser(username), []),
            GetUserRepos: useCallback((username) => GetUserRepos(username), []),
            GetUserStarred: useCallback((username) => GetUserStarred(username), []),
        };
    return (
        <GithubContext.Provider value= {contextValue}>
            {children}
            </GithubContext.Provider>
    );
};

export default GithubProvider;
