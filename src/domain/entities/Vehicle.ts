import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Coverage } from './Coverage';
import { Provider } from './Provider';
import { Category } from './Category';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Coverage, (coverage) => coverage.vehicle)
  coverage!: Coverage[];

  @ManyToOne(() => Provider, (provider) => provider.vehicle)
  provider!: Provider;

  @ManyToMany(() => Category, (category) => category.vehicle)
  @JoinTable()
  category!: Category[];
}
