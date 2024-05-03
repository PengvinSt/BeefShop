
export interface IFood {
    src:string,
    Product_image?:{data: {id:string, attributes:{url:string}}},
    alt:string,
    food_category:string,
    food_category_additional?:string,
    food_name:string,
    food_price:number
}