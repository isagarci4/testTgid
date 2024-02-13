import styled from "styled-components";

export const ProductCard = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   gap: 1rem;
   border-radius: 12px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
   transition: transform 0.3s;

   color: ${(props) => props.theme["gray-900"]};

   cursor: pointer;

   &:hover{
    transform: scale(1.1);
   }
   

    img {
        border-radius: 12px;
        width: 10rem;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;

    div strong{
    
    }

    button {
        color: ${(props) => props.theme["gray-100"]};
        background: ${(props) => props.theme["blue-400"]};
        cursor: pointer;

        padding: 1rem;
        border: none;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`
