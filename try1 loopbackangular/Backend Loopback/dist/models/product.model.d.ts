import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    Id?: number;
    Name: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export type ProductWithRelations = Product & ProductRelations;
