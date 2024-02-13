import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;

    h1 {
        color: ${(props) => props.theme["gray-900"]};
        text-decoration: none;
    }

    button {
        background: transparent;
        border: none;
        padding: 0.3rem;
        position: relative;

        cursor: pointer;
    }

    button span{
        background: ${(props) => props.theme["red-500"]};
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        left: 0;
        color: ${(props) => props.theme["gray-100"]};
        font-size: 11px;
        font-weight: 600;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`