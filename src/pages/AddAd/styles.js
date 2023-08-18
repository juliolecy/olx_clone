import styled from 'styled-components';

export const PageArea = styled.div`

form {
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;

    .area {
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area--title {
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size: 14px;
        }
        .area--input {
            flex:1;

            input, select, textarea {
                width:100%;
                font-size: 14px;
                padding:5px;
                border: 1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition:all ease .4s; 

                &:focus {
                    border:1px solid #333;
                    color:#333;
                }
            }

            .textarea {
                height:150px;
                resize:none;
            }

            button {
               background-color:#0089FF;
               border:0;
               outline:0;
               padding:5px 10px;
               border-radius:4px;
               color:#FFF;
               font-size:15px;
               cursor:pointer;
               
               &:hover {
                   background-color:#006FCE;
               }
            }
        }
    }
}

@media (max-width:600px){
   form{
      .area{
         flex-direction: column;

            .area--title{
               width:100%;
               text-align: left;
               margin-bottom: 10px;
            }

            .area--input{
               width: 100%;

               button{
                  width:100%;
                  padding: 10px;
                  border: 1px solid #ccc;
               }
            }
      }
   }
}
`;

//Outros estilos


export const Container = styled.div`
margin-top: 4rem;
display:flex;
flex-direction: column;
align-items: center;

h1{
   font-weight: normal;
   margin: .5rem;
    font-size: 1.7rem;
}

svg{
   width: 50px;
}

form{
   max-width: 300px;
    margin: 0 auto;
    width: 100%;
   h2{
      font-weight: 600;
   margin: 0;
    font-size: 1.3rem;
    margin-bottom: 3px;
   }

   .area--input{
      height: 28px;
      input{
         height: 100%;
    border: 1px solid #909090;
    border-radius: 10px;
    width: 100%;
    padding: 5px 14px;

    &:focus{
      outline: none;
    }
      }
   }

   .remember--password{
      display: flex;
    align-items: center;
    justify-content: space-between;
      h3{
         font-weight: normal;
      }
   }

   .button--login{
      margin: 2rem 0;
      background-color: #ff8100;
    color: #fff;
    border: none;
    width: 100%;
    padding: .8rem;
    border-radius: 25px;
   }

}
.signin{
   display:flex;
   margin-top: 2rem;
   gap: 4px;
   a{
      color: #6b0096;
      text-decoration: none;
   }
}
`