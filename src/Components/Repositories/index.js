import React from 'react'
import RepositoryItem from '../Repository-item';
import useGithub from '../../hooks/githubHooks';
import { useEffect, useState } from 'react';
import * as s from './styled'


const Repositories = () => {

    const { githubState, GetUserRepos, GetUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);


    useEffect(() => { 
        
        if( githubState.user.login ) {
            GetUserRepos(githubState.user.login); 
            GetUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(!!githubState.repositories);


    }, [githubState.user.login]);


    return (
        <> 
        {hasUserForSearchrepos ? (
        <s.WrapperTabs 
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <s.WrapperTabList>
                <s.WrapperTab> REPOSITORIOS </s.WrapperTab>
                <s.WrapperTab> STARRED</s.WrapperTab>                
                
            </s.WrapperTabList>
            <s.WrapperTabPanel> 
                <s.WrapperList> 
                {githubState.repositories.map((item) =>(

                
                <RepositoryItem
                key={item.id}
                name= {item.name}
                linkToRepo= {item.html_url}
                fullName= {item.full_name}   />
                ))}
                </s.WrapperList>
            </s.WrapperTabPanel>
            <s.WrapperTabPanel>
            <s.WrapperList>
            {githubState.starred.map((item) =>(

                
            <RepositoryItem
            key={item.id}
            name= {item.name}
            linkToRepo= {item.html_url}
            fullName= {item.full_name}   />
            ))}               
             </s.WrapperList>
            </s.WrapperTabPanel>

            
        </s.WrapperTabs>
 ) : ( <></> )} </>
    )
}

export default Repositories;
