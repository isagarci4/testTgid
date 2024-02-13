import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
    
`

export const ImageContainer = styled.div`
    max-width: 300px;
    ;

    img {
        width: 100%;
    }
`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;


    strong {
        font-size: 28px;
        font-weight: 700;
    }

    input[type=number] {
        -moz-appearance: textfield;
        text-align: center;
        border: none;
        background: ${(props) => props.theme.white};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-innet-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

    button {
        color: ${(props) => props.theme["blue-400"]};
        background: ${(props) => props.theme.white};
        border: none;

        cursor: pointer;
    }

    #decrement {
        padding: 15px 5px 15px 25px;
        border-radius: 45px 0 0 25px;
    }

    #increment {
        padding: 15px 25px 15px 5px;
        border-radius: 0 45px 45px 0;
    }

    #addToCart {
        border: none;
        padding: 1rem;
        border-radius: 12px;
        color:  ${(props) => props.theme["gray-100"]};
        background: ${(props) => props.theme["blue-400"]};
    }
`