import appDataSource from "./postgres";
import Test from "./test.entity";

const initializedRepo = appDataSource.getRepository(Test);

export default initializedRepo;
