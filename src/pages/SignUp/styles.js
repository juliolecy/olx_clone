import styled from 'styled-components'

export const PageArea = styled.div`
form {
   background-color: #fff;
   border-radius: 3px;
   padding: 10px;
   box-shadow: 0 0 3px #999;
}

.area {
   display: flex;
   align-items: center;
   padding: 10px;
   max-width: 500px;

   .area--title{
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
      font-size: 14px;
   }

   .area--input{
      flex: 1;

      input{
         width: 100%;
         font-size: 14px;
         padding: 5px;
         border: 1px solid #ddd;
         border-radius: 3px;
         outline: 0;
         transition: all ease .4s;

         &:focus{
            border: 1px solid #333;
            color: #333;
         }
      }

      .init{
         width: 5%;
      }

      button{
         background-color: #0089ff;
         boder: 0;
         outline: 0;
         padding: 5px 10px;
         border-radius: 4px;
         color: #fff;
         font-size: 15px;
         cursor: pointer;

         &:hover{
            background-color: #006fce;
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
`


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