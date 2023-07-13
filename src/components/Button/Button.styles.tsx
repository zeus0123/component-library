import styled from 'styled-components';
import { IButton } from './IButton';

export const StyledButton = styled.button<IButton>`
    color: ${({ color }) => color || '#fff'};
    background-color: ${({ bgColor }) => bgColor || '#390099'};
    font-size: ${({ fontSize }) => fontSize || '12px'};
    outline: none;
    border: ${({ border }) => border || 'none'};
    padding: ${({ padding }) => padding || '10px'};
    width: ${({ width }) => width || 'auto'};
    margin: ${({ margin }) => margin || ''};
    border-radius: ${({ borderRadius }) => borderRadius || ''};
    cursor: ${({ cursor }) => cursor || 'pointer'};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;