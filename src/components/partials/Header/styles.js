import styled from "styled-components";

export const Header = styled.header`
position: relative;
padding: 1rem;
display:flex;
flex-direction: row;
align-items: center;
background-color: #fff;
justify-content: space-between;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
a{
svg{
    min-width: 40px;
    max-width: 60px;
}
}
.search--container{
    border: 1px solid #c5c5c5;;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    margin: 0 2rem;
    align-items: center;
    
    form{
        align-items: center;
        display: flex;
        padding: 0.4rem;
        min-width: 260px;

        input{
            border: none;
            width: 60%;
            &:focus{
      outline: none;
    }
        }
        .wall{
            border-right: 1px solid #909090;
            margin: 0;
            height: 27px;

        }
        select{
            border: none;
            background-color: transparent;
            padding-right: .5rem;
            margin-right: 1rem;
            color: #565656;
        }
        button{
            border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
            svg{
                font-size: 1.5rem;
            }
        }
    }

}

.buttons{
    display: flex;
    align-items: center;
.login{
    padding: .7rem;
    border: 1px solid #adadad;
    border-radius: 25px;
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    margin: 0 .5rem;
    button{
        background-color: transparent;
    border: none;
    cursor:pointer;
}
}

a{
    text-decoration: none;
    color:#000;
    svg{

font-size: 1.5rem;
}

}


    .anunciar{
        padding: .7rem;
        border: none;
        border-radius: 25px;
        display: flex;
        width: 120px;
        align-items: center;
    justify-content: center;
    margin: 0 .5rem;
    background-color: #ff8100;
   
a{
    color: #fff;
        background-color: transparent;
    cursor:pointer;
    border: none;
    text-decoration: none;
    color:#fff;
}
    }

    .exit{
    border:none;
    background: transparent;
    svg{
        font-size: 1.5rem;
        color:#000;
    }
}
    
}

@media screen and (max-width:762px){
    .buttons {
        .anunciar{
            width:100px
        }
    .login{
            width:100px
    }
    }
}

@media screen and (max-width:762px){
    .buttons {
        display:none;
    }
}

@media screen and (max-width:556px){
    flex-direction: column;
    gap: 2rem;
}
`

export const MenuMobile = styled.div`
    bottom: ${({open})=> open ? '44px' : '-58px'};
    left: 50%;
    transform: translate(-50%, 50%);
    align-items: center;
    padding: 1rem 2rem;
    background: #6e0ad6;
    border-radius: 15px;
    justify-content: center;
    transition: .5s all ease ;
    position: fixed;

.chevron{
    padding: 3px 8px 6px 8px;
    position: absolute;
    top: -21px;
    background: #6e0ad6;
    border-radius: 37%;
    left: 62px;
    
    svg{
        cursor: pointer;
        color: #fff
    }
}

ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    li{
        margin-bottom: 7px;

        a{
            text-decoration: none;
    cursor: pointer;
    color: #fff;
    transition: .5s ease all;
            &:hover{
                color: #757575;
            }
        }
    }
}

@media screen and (min-width: 762px){
    display:none;
}
`