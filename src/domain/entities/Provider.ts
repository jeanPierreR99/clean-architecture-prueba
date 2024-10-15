import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Coverage } from './Coverage';
import { Vehicle } from './Vehicle';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Coverage, (coverage) => coverage.provider)
  coverage!: Coverage[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.provider)
  vehicle!: Vehicle[];
}
