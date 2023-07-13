import React from 'react';
import { IButton } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<IButton> = ({
    color,
    children,
    bgColor,
    fontSize,
    border,
    borderRadius,
    width,
    disabled,
    padding,
    margin,
    onClick,
    id,
    cursor
}) => {
    return (
        <StyledButton
            color={color}
            bgColor={bgColor}
            fontSize={fontSize}
            border={border}
            id={id}
            disabled={disabled || false}
            onClick={onClick}
            margin={margin}
            padding={padding}
            borderRadius={borderRadius}
            width={width}
            cursor={cursor}
        >
            {children}
        </StyledButton>
    )
}

export default Button;