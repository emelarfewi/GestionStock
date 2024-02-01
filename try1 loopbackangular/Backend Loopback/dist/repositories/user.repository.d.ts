import { DefaultCrudRepository } from '@loopback/repository';
import { GestionstockDsDataSource } from '../datasources';
import { User, UserRelations } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.Id, UserRelations> {
    constructor(dataSource: GestionstockDsDataSource);
}
