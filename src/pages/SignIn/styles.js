import styled from 'styled-components'

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
      background-color: #ff8100;
    color: #fff;
    border: none;
    width: 100%;
    padding: .8rem;
    border-radius: 25px;
   }

}
.signup{
   display:flex;
   margin-top: 2rem;
   gap: 4px;
   a{
      color: #6b0096;
      text-decoration: none;
   }
}
`