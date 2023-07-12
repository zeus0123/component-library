import React from 'react';
import { IButton } from './IButton';
import { StyledButton } from './Button.styles';

const Button: React.FC<IButton> = ({
    color,
    children,
    bgColor
}) => {
    return (
        <StyledButton
            color={color}
            bgColor={bgColor}
        >
            {children}
        </StyledButton>
    )
}

export default Button;