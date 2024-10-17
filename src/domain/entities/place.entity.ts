import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Quotation } from "./quotation.entity";
import { Coverage } from "./coverage.entity";

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => Quotation, (quotation) => quotation.place)
  @JoinTable()
  quotation!: Quotation[];

  @ManyToMany(() => Coverage, (coverage) => coverage.place)
  @JoinTable()
  covergae!: Coverage[];
}
