import { ReactNode } from "react";

export interface IButton {
    color?: string;
    children: ReactNode;
    bgColor?: string;
    fontSize?: string;
    border?: string;
    padding?: string;
    margin?: string;
    onClick?: React.MouseEvent<HTMLElement>;
    width?: string;
    borderRadius?: string;
    disabled?: boolean;
    id?: string; 
    cursor?: string;
}