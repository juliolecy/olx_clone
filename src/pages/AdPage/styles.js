import styled from 'styled-components';

export const BreadChumb = styled.div`
font-size:13px;
margin-top:20px;
padding-left: 1rem;

a{
    display:inline-block;
    margin:0px 5px;
    text-decoration:underline;
}

@media(max-width:600px){
    &{
        margin:20px;
    }
}
 
`;

export const Content = styled.div`
    margin-top: 1rem;

    display: flex;
    padding: 0 1rem;
.content--left{
    max-width: 70%;
}

.content--right{
    max-width: 30%;
    min-width: 30%;
    .price--container{
        align-items: center;
        display: flex;
        svg{
            color:#6e0ad6

        }
        .price{
            background-color:#6e0ad6 ;
            padding: 1px;
    height: 58px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 10px 22px 10px 8px;
    align-items: center;
    color: #fff;
    font-size: 1.3rem;
    width: 100%;


        }
    }

    .ad--info{
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(249, 249, 249);
    border: 1px solid rgb(216, 216, 216);
    border-radius: 4px;
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 2rem;


        h2{
            font-size: 1.2rem;
        }

        .buttons{
            display: flex;
            gap: 1rem;
            width: 100%;
    padding: 0 1rem;
    margin-bottom: 1rem;

    button{
    height: 3rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    
    
    &.buy{
        width: 8rem;
        background-color: #ff8100;
        color: #fff;
        border: none;
        position: relative;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    min-width: 72px;
    width: fit-content;
    border-style: solid;
    border-width: 1px;
    outline: none;
    text-decoration: initial;
    height: 40px;
    padding: 1px 3px;
    background-color: #f28000;
    padding: 1px 17px;
    border-color: #f28000;
    color: #ffffff;
    border-radius: 500px;;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    }

    &.chat{
    gap: 7px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: auto;
    border-radius: 24px;
    align-self: flex-start;
    flex-basis: auto;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: rgb(74 74 74 / 20%) 0px 3px 5px 0px;
    background-color: rgb(253, 240, 226);
    border: 1px solid #f28000;
    color: #f28000;
    padding: 11px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    }
    }
    }
    small{
        padding: 0 1rem;
    }
        
    }
}

@media screen and (max-width:762px){
    flex-direction: column;

    .content--left{
        width: 100%;
        max-width:100%;
    }

    .content--right{
        display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    max-width:100%;
    min-width:auto
    }
}
`

export const FakeImage = styled.div`
`   