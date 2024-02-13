import styled from "styled-components";


export const CartItemContainer = styled.section`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
    margin: 1rem;
    padding-bottom: 1.4rem;
    margin-bottom: 1.4rem;
    position: relative;

    img {
        width: 70px;
    }

    &:last-child{
        border-bottom: none;
    }
`

export const CartItemContent = styled.div`
    padding: 0 35px 0 10px;

    h3{
        font-size: 1rem;
        font-weight: bold;
    }

    p{
        font-size: 1.5rem;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;

        background: transparent;
        border: 0;
        cursor: pointer;
    }

    button:hover {
        color: ${(props) => props.theme["red-500"]};
    }
`