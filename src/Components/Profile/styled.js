import styled from 'styled-components';


export const Wrapper = styled.div` 
display: flex;
align-items: flex-start;


`;
export const WrapperInfoUser = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-between;
height: 12rem;
margin-left: 20px;
h1 {
    font-size:24px;
    font-weight: bold;
}
h4 {
    font-size:18px;
    font-weight: bold;
}

`;

export const WrapperStatusCount = styled.div` 
display: flex;
align-items: center;
div {
    margin: 8px;
    text-align: center;
}


`;

export const WrapperUserName = styled.div` 
display: flex;
align-items: center;
margin-top: 8px;
h3 {
    margin-right:8px;
    font-weight: bold;
}
a{
    color: blue;
    font-weight: bold;
    font-size: 18px;
}


`;

export const WrapperImage = styled.img` 
border-radius: 50%;
height: 250px;
margin: 15px;



`;
