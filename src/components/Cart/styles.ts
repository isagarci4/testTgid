import styled from "styled-components";

interface CartContainerProps {
    isOpen: boolean
}

export const CartContainer = styled.section<CartContainerProps>`
    width: 100%;
    max-width: 330px;
    background: ${(props) => props.theme["gray-100"]};
    height: 85vh;
    position: fixed;
    top: 100px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: ${(props) => props.isOpen ? 'translate(0, 0)' : 'translate(110%, 0)'};
    transition: all 400ms ease;
`

export const CartItens = styled.div`
    flex-grow: 1;
    overflow: auto;
`

export const CartResume = styled.div`
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-top: 1px solid ${(props) => props.theme["gray-100"]};
`