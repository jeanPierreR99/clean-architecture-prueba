import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  capacity_standard!: number;

  @Column()
  capacity_premium!: number;

  @ManyToMany(() => Vehicle, (vehicle) => vehicle.category)
  vehicle!: Vehicle[];
}
