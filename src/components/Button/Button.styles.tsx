import styled from 'styled-components';
import { IButton } from './IButton';

export const StyledButton = styled.button<IButton>`
    color: ${({ color }) => color || '#fff'};
    background-color: ${({ bgColor }) => bgColor || '#390099'}
`;