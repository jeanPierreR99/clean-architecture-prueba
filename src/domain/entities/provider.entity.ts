import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Coverage } from './coverage.entity';
import { Vehicle } from './vehicle.entity';

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
