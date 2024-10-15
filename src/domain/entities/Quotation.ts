import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { User } from "./User";
import { Coverage } from "./Coverage";
import { Price } from "./Price";
import { Place } from "./Place";

@Entity()
export class Quotation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: "creada" })
  status!: string; // 'creada', 'reserva', 'reserva cancelada'

  @Column()
  origin!: string;

  @Column()
  destination!: string;

  @Column()
  passengers!: number;

  @Column({ type: "date", nullable: false })
  travelDate!: string;

  @Column({ nullable: true })
  category?: string;

  @ManyToOne(() => User, (user) => user.quotations)
  user!: User;

  @ManyToMany(() => Place, (place) => place.quotation, { nullable: true })
  place?: Place[];

  @ManyToOne(() => Coverage, { nullable: true })
  coverage?: Coverage;

  @ManyToOne(() => Price, { nullable: true })
  price?: Price;
}
