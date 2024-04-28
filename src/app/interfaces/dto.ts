import { IFood } from "./food";
import { IPost } from "./post";

export interface IDto {
    id:number,
}

export interface IDtoFood extends IDto {
    attributes:IFood
}

export interface IDtoPost extends IDto {
    attributes:IPost
}