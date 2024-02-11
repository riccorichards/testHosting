"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceTest {
    constructor(repo) {
        this.repo = repo;
    }
    async CreateTestService(input) {
        try {
            return await this.repo.createTest(input);
        }
        catch (error) {
            throw new Error("Service stage:" + error);
        }
    }
    async ReturnPostsService() {
        try {
            return await this.repo.returnPosts();
        }
        catch (error) {
            throw new Error("Service stage:" + error);
        }
    }
}
exports.default = ServiceTest;
