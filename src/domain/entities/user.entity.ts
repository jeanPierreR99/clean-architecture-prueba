import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Quotation } from "./quotation.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  dni!: string;

  @Column()
  phone_number!: number;

  @Column()
  email!: string;

  @OneToMany(() => Quotation, (quotation) => quotation.user)
  quotations!: Quotation[];
}
