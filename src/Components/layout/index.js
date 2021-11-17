import React from 'react';
import useGithub from '../../hooks/githubHooks';
import Header from '../Header';
import * as s from "./styled"

const Layout = ({ children }) => {

    const { githubState } = useGithub();
    return (
        <s.WrapperLayout>
            <Header />
             {children}
                       
        </s.WrapperLayout>
  );
} 

export default Layout;
