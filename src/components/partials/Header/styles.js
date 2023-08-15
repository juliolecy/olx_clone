import styled from "styled-components";

export const Header = styled.header`
padding: 1rem;
display:flex;
flex-direction: row;
align-items: center;
background-color: #fff;
justify-content: space-between;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
svg{
    width: 60px;
}

.search--container{
    border: 1px solid #9c9c9c;
    border-radius: 13px;
    max-width: 500px;
    width: 100%;
    margin: 0 2rem;
    align-items: center;
    
    form{
        align-items: center;
        display: flex;
        padding: 0.4rem;

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
    
}`