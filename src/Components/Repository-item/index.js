import React from 'react'
import * as s from './styled'

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        
        <s.Wrapper>
            <s.WrapperTitle>{ name }</s.WrapperTitle>
            <h4>Nome do repositório:</h4>


            <s.WrapperLink href={ linkToRepo } target="_blank" rel="noreferrer">{ fullName } </s.WrapperLink>
        </s.Wrapper>
    );
};

export default RepositoryItem
