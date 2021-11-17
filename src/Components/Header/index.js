import React, { useState } from 'react'
import useGithub from '../../hooks/githubHooks'
import * as s from './Styled'

const Header = () => {

    const { GetUser } = useGithub();
    const [usernameForSearch, setusernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
       return GetUser( usernameForSearch );
    }

    return (
        <header>
<s.Wrapper>
    <input type='text' placeholder= "Digite o nome usuário..." 
    onChange={(event) => setusernameForSearch(event.target.value)}/>
    <button type="submit" onClick={submitGetUser}>
       <span> Buscar</span>
    </button>

    </s.Wrapper>
        </header>
    )
}

export default Header;