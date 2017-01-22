import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            { id: "1a", firstName: 'John', lastName: "Doe", email: "spam@email.com", pantryId: "", createdAt: new Date(), updatedAt: null, deletedAt: null, password: "Enter1" },
            { id: "1a", firstName: 'Bernard', lastName: "VC", email: "spam2@email.com", pantryId: "1b", createdAt: new Date(), updatedAt: null, deletedAt: null, password: "Azert2" }
        ];
        return { users };
    }
}