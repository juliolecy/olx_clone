import styled from 'styled-components';
import BannerImg from '../../assets/banner.png'

export const Banner = styled.div`
display:flex;
    width: 100%;
    margin: 2rem 0;
    justify-content: center;
    height: 400px;

.banner{
    background-image: url(${BannerImg}) ;
        display: flex;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    border-radius: 29px;
    background-position: center;
    background-size: cover;
}

@media screen and (max-width:750px){
    height: 300px;
}

@media screen and (max-width:560px){
    height: 250px;
}
@media screen and (max-width:450px){
    height: 250px;
}
@media screen and (max-width:400px){
    height: 210px;

    .banner{
        margin:0;
        width:100%
    }
}
@media screen and (max-width:388px){
    height: 180px;
}


`

export const Slider = styled.div`
width: 100%;
position: relative;
margin: 2rem 0;
display:flex;

.arrow{
    font-size: 3rem;
    color:#6f6f6f;
    cursor: pointer;
    &:hover{
        color: #bbbbbb; 
    }
}

.carousel{
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display:none;
    }

    .categoryItem {
            width:25%;
            display:flex;
            flex-direction: column;
            align-items:center;
            color:#000;
            text-decoration:none;
            height:auto;
            margin-bottom:10px;
            flex: none;
            margin: 0 20px;

            &:hover {
                color:#999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }

        }
}
`
export const SearchArea = styled.div`
    background-color:#DDD;
    border-bottom:1px solid #CCC;
    padding:20px 0;

    .searchBox {
        background-color:#9BB83C;
        padding:20px 15px;
        border-radius:5px;
        box-shadow:1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display:flex;

        form{
            flex:1;
            display:flex;

            input, select {
                height:40px;
                border:0;
                border-radius:5px;
                outline:0;
                font-size:15px;
                color:#000;
                margin-right:20px;
            }

            input {
                flex:1;
                padding: 0 10px;
            }

            select{
                width: 100px;
            }

            button {
                background-color:#40AEEF;
                font-size:15px;
                border:0;
                border-radius: 5px;
                color:#FFF;
                height:40px;
                padding:0 20px;
                cursor:pointer;

                &:hover {
                    color:#e0dddd;
                    background-color:#2686bf;
                }
                
            }

            
        }
    }

    .categoryList {
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;

        .categoryItem {
            width:25%;
            display:flex;
            align-items:center;
            color:#000;
            text-decoration:none;
            height:50px;
            margin-bottom:10px;

            &:hover {
                color:#999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }

        }

    }


    @media ( max-width: 600px){
        .searchBox form{
            flex-direction: column;

            input{
                padding: 10px;
                margin-right: 0;
                margin-bottom: 10px;
            }
            
            select{
                width: 100%;
                margin-bottom: 10px;
            }
        }
        .categoryList .categoryItem{
            width: 50%;
            padding: 10px;
    }
    }
`;

export const PageArea = styled.div`

h2 {
    font-size:20px;
    margin-left: 1rem;
}

.list {
    display:flex;
    flex-wrap:wrap;

    .aditem {
        width:25%;
    }
}

.seeAllLink {
    color:#000;
    text-decoration:none;
    font-weight:bold;
    display:inline-block;
    margin-left: 1rem;
}

@media(max-width:600px){
    &{
        margin:10px;
    }
    
    .list .aditem{
        width: 50%;
    }
}
`;