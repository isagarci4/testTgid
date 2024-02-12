import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: ${(props) => props.theme["gray-500"]};
    padding: 1rem;
    border-radius: 12px; */
    margin-bottom: 3rem;

    button {
        background: transparent;
        border: none;
        padding: 0.3rem;

        cursor: pointer;
    }
`