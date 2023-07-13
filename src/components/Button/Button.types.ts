import { ReactNode, MouseEventHandler } from "react";

export interface IButton {
    color?: string;
    children: ReactNode;
    bgColor?: string;
    fontSize?: string;
    border?: string;
    padding?: string;
    margin?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    width?: string;
    borderRadius?: string;
    disabled?: boolean;
    id?: string; 
    cursor?: string;
}