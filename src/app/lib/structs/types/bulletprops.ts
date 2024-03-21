import { EBulletType } from "../enums/bullettype"

export type TBulletProps = {
    title?: string,
    url?: string,
    active?: boolean,
    type?: EBulletType,
    plaque?: {color:string, content:string}
}