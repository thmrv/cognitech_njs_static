import { MouseEventHandler } from "react"

export type TButtonProps = {
    text?:string, 
    className?:string, 
    icon?:string, 
    url?:string, 
    plaque?: { enabled: boolean, fillcolor: string, text: string }, 
    fillcolor?:string,
    hoverAnimation?:boolean,
    disabled?:boolean,
    downSizing?:boolean,
    onClick?:(e:any) => void
}