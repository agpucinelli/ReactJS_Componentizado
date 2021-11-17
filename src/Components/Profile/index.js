import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as s from './styled'

const Profile = () => 

{
      const { githubState } = useGithub()

    return (
        <s.Wrapper>
            
            <s.WrapperImage 
              src= { githubState.user.avatar_url }
              alt="Foto Perfil"  
              

              />
              
              <s.WrapperInfoUser>
               <div>
                <h1> {githubState.user.name} </h1>
        <s.WrapperUserName>
                <h3>Usuário: </h3>
                <a href= { githubState.user.html_url}
                target="_blank" 
                rel="noreferrer"> { githubState.user.login } </a>
        </s.WrapperUserName>
        <s.WrapperUserName>
                <h3>Local: </h3>
                { githubState.user.location } 
        </s.WrapperUserName>
        <s.WrapperUserName>
                <h3>Bio: </h3>
                 { githubState.user.bio } 
        </s.WrapperUserName>
        </div>
        <s.WrapperStatusCount>      
                            
                <div> 
                  <h4>Followers</h4>
                  <span> { githubState.user.followers } </span>
               </div>
               <div> 
                <h4>Fallowings</h4>
                <span> { githubState.user.following } </span>
              </div>
              <div> 
                <h4>Starreds</h4>
                <span> { githubState.user.public_gists } </span>
              </div>
              <div> 
                <h4>Repos</h4>
                <span> { githubState.user.public_repos } </span>
              </div>
            </s.WrapperStatusCount>
            
            </s.WrapperInfoUser>
        </s.Wrapper>
     );
    };

export default Profile;
