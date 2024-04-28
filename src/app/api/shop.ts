import { IDtoFood, IDtoPost } from "../interfaces/dto"
import { IPost } from "../interfaces/post";
import AppStore from "../store/app"
import AppApi from "./app"


export default class ShopApi {
    constructor(private api: AppApi, private store: AppStore) {}

    async getProductsAll():Promise<IDtoFood[]> {
        let res: IDtoFood[] = [];

        try {
            const {data} = await this.api.shopConnection.get('/api/beef-shop-items?populate=*')
            res.push(...data.data)
            
        } catch (error) {
            console.error(error)
        }

        return res
    }

    async getPostsListAll():Promise<IDtoPost[]> {
        let res: IDtoPost[] = [];

        try {
            const {data} = await this.api.shopConnection.get('/api/beff-shop-posts?populate=*')
            res.push(...data.data)
            
        } catch (error) {
            console.error(error)
        } 
        return res
    }

    async getPostById(id:string):Promise<IPost | null> {
        let res: IPost | null = null;

        try {
            const {data} = await this.api.shopConnection.get(`/api/beff-shop-posts/${id}?populate=*`)
            res = data.data.attributes
        } catch (error) {
            console.error(error)
        } 

        return res
    }
    
}
/*

    const getData = async () => {
        let res:IDto[]
        await fetch('http://localhost:3001')
        .then(data => data.json())
        .then(data => res = data.data)
        .finally(()=> ) 

    }

*/