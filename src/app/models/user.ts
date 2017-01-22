export class User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    pantryId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
    password: string; //temp

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.pantryId = "";
        this.createdAt = new Date();
        this.updatedAt = null;
        this.deletedAt = null;
        this.isDeleted = false;
        this.password = "";
    }
}
