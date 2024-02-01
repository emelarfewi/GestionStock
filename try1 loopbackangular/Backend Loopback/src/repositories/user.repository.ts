import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionstockDsDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.Id,
  UserRelations
> {
  constructor(
    @inject('datasources.gestionstock_ds') dataSource: GestionstockDsDataSource,
  ) {
    super(User, dataSource);
  }
}
