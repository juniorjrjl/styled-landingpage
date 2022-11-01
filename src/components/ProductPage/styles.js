import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 70px 50px;
    display: flex;
    justify-content: center;
`;

export const ProductImage = styled.img.attrs({
    src: "./images/productImage.png",
    alt: "appleWatchImage",
})`
    width: 400px;
    pointer-events: none;
`;

export const ProductTextContainer = styled.div`
    width: 500px;
    padding-top: 40px;
`;

export const ProductTitle = styled.p`
    font-size: 40px;
    font-weight: bold;
`;

export const ProductDescription = styled.p`
    padding-top: 30px;
    font-size: 18px;
`;

export const ProductButton = styled.button`
    background-color: ${(props) => props.theme.button.background};
    color: ${(props) => props.theme.button.color};
    margin-top: 30px;
    width: 200px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    border: ${(props) => props.theme.button.border};
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        font-size: ${(props) => props.theme.button.fontHover};
    }
`;