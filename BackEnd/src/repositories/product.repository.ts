import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionstockDsDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.Id,
  ProductRelations
> {
  constructor(
    @inject('datasources.gestionstock_ds') dataSource: GestionstockDsDataSource,
  ) {
    super(Product, dataSource);
  }
}
