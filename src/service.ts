import TestRepo from "./repo";
import { TestCreation } from "./type";

class ServiceTest {
  private repo: TestRepo;

  constructor(repo: TestRepo) {
    this.repo = repo;
  }

  async CreateTestService(input: TestCreation) {
    try {
      return await this.repo.createTest(input);
    } catch (error) {
      throw new Error("Service stage:" + error);
    }
  }

  async ReturnPostsService() {
    try {
      return await this.repo.returnPosts();
    } catch (error) {
      throw new Error("Service stage:" + error);
    }
  }
}

export default ServiceTest;
