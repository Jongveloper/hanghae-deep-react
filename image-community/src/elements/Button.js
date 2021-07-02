import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick, bg, color, width, height,margin} = props;   

    const styles = {
        text : text,
        color: color,
        bg: bg,
        width,
        height,
        margin
    }

    return(
        <React.Fragment>
            <ElButton onClick={_onClick}>{text}</ElButton>
        </React.Fragment>

    )
}

Button.defaultProps = {
    bg: "gray",
    color: "white",
    width: "40px",
    height: "40px",
    margin: "0px auto",
    text: "텍스트",
    _onClick: () => {}
    
}

const ElButton = styled.button`
    width: 100%;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin? `margin: ${props.margin};` : '')};
    ${(props) => (props.width? `width: ${props.width};` : '')};
    ${(props) => (props.height? `height: ${props.height};` : '')};
    ${(props) => (props.bg? `background-color: ${props.bg};` : '')};
    ${(props) => (props.color? `color: ${props.color};` : '')};
`;

export default Button;