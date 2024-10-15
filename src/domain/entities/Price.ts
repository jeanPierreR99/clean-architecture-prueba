import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Coverage } from './Coverage';
import { Quotation } from './Quotation';

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
