
export interface IPost{
    post_title:string,
    post_description:string,
    shop_post_block:IPostBlock[],
}

export interface IPostBlock{
    id:number,
    post_text:IPostText[],
    media_link:string,
}

export interface IPostText{
    type:string,
    format:string,
    children:IPostTextChildren[]
}

export interface IPostTextChildren {
    type:string,
    format?:string,
    children: IPostTextChildrenData[]
}

export interface IPostTextChildrenList {
    type:string,
    children:IPostTextChildrenData[]
}

export interface IPostTextChildrenData {
    type:string,
    text:string,
    bold?:boolean,
    strikethrough?:boolean,
    italic?:boolean,
}