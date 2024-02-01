import { DefaultCrudRepository } from '@loopback/repository';
import { GestionstockDsDataSource } from '../datasources';
import { Product, ProductRelations } from '../models';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.Id, ProductRelations> {
    constructor(dataSource: GestionstockDsDataSource);
}
