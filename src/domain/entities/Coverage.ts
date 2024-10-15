import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Provider } from "./Provider";
import { Vehicle } from "./Vehicle";
import { Place } from "./Place";
import { Price } from "./Price";
import { Quotation } from "./Quotation";

@Entity()
export class Coverage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  origin!: string;

  @Column()
  destination!: string;

  @Column()
  start_time!: string;

  @Column()
  duration!: number;

  @ManyToOne(() => Provider, (provider) => provider.coverage)
  provider!: Provider;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.coverage)
  vehicle!: Vehicle;

  @ManyToMany(() => Place, (place) => place.covergae)
  place!: Place[];

  @OneToMany(() => Price, (price) => price.coverage)
  price!: Price[];

  @OneToMany(() => Quotation, (quotation) => quotation.coverage)
  quotation!: Quotation[];
}
