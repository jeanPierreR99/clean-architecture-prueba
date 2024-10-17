import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Coverage } from './coverage.entity';
import { Quotation } from './quotation.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  amount!: number;

  @Column()
  valid_from!: string;

  @Column()
  valid_to!: string;

  @ManyToOne(() => Coverage, (coverage) => coverage.price)
  coverage!: Coverage;

  @OneToMany(() => Quotation, (quotation) => quotation.price)
  quotation!: Quotation[];
}
