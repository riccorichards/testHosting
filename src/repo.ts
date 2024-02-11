import { Repository } from "typeorm";
import Test from "./test.entity";
import { TestCreation } from "./type";

class TestRepo {
  constructor(private repoTest: Repository<Test>) {}

  async createTest(input: TestCreation) {
    try {
      const newTest = this.repoTest.create(input);
      await this.repoTest.save(newTest);

      return newTest;
    } catch (error) {
      console.error("Error creating test entity:", error);
      throw new Error("Failed to create test entity.");
    }
  }

  async returnPosts() {
    try {
      const posts = await this.repoTest.find({});
      if (!posts) throw new Error("Data is not available");

      return posts;
    } catch (error) {
      console.error("Error creating test entity:", error);
      throw new Error("Failed to create test entity.");
    }
  }
}

export default TestRepo;
