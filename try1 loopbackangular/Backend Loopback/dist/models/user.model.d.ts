import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    Id?: number;
    Nom: string;
    Prenom: string;
    Email: string;
    Password: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
