import { Stock } from './stock.model'

export interface Product {
    _id: string;
    name: string;
    band: string;
    image: string;
    price: number;
    stock: Stock[];
}