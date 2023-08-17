import styled from 'styled-components';

export const Fake = styled.div`
    background-color:#DDD;
    height:${props=>props.height || 20}px;
`;

export const PageArea = styled.div`
display:flex;
margin-top:20px;
.box {
    background-color:#FFF;
    border-radius:5px;
    box-shadow:0px 0px 4px #999;
    margin-bottom:20px;
}
.box--padding {
    padding:10px;
}
.leftSide {
    flex:1;
    margin-right:20px;
    .box{
        display:flex;
    }
    .adImage {
        width:400px;
        height:500px;
        margin-right:20px;
        .each-slide img {
            display:flex;
            align-items:center;
            justify-content:center;
            background-size:cover;
            height:320;
        }
    }
    .adInfo {
         flex:1;
        .adName{
            margin-bottom:20px;
            h2 {
                margin:0;
                margin-top:20px;
            }
            small {
                color:#999;
            }
        }
        .adDescription {
            small {
                color:#999;
            }
        }
    }
}
.rightSide {
    width:250px; 

    .price span {
        color:#0000FF;
        display:block;
        font-size:27px;
        font-weight:bold;
    }

    .contactSellerLink {
        background-color:#0000FF;
        color:#FFF;
        height:30px;
        border-radius:5px;
        box-shadow:0px 0px 4px #999;
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        margin-bottom:20px;
    }

    .createdBy small {
        display:block;
        color:#999;
        margin-top:10px; 
    }
}

@media(max-width:600px){
    &{
        flex-direction: column;
    }
    .leftSide{
        margin:0;
        .box{
            flex-direction: column;
            width:320px;
            margin:auto;
        }

        .adInfo{
            padding:10px;
        }
        
        .adImage{
            width: 100%;
        }

       
    }

    .rightSide{
        width:auto;
        margin-top:20px;
        .box{
            flex-direction: column;
            width:320px;
            margin:auto;
        }

        .contactSellerLink{
            width:320px;
            margin: 20px auto;
        }
    }
}
`;

export const OthersArea = styled.div`
h2 {
    font-size:20px;
}
.list {
    display:flex;
    flex-wrap: wrap;

    .aditem {
        width:25%;
    }
}

@media(max-width:600px){
    & {
        margin:10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    }

    .list{
        justify-content: center;
        .aditem{
            width: 50%;
        }
        
    } 
}
`;

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

        
    }
}
`

export const FakeImage = styled.div`
`   