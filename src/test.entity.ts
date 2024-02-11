import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("test")
class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  completion: boolean;
}

export default Test;
