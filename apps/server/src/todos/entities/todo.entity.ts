
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todolist')
export class TodoList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 10 })
  source: string;

  @Column()
  create_date: string;

  @Column()
  update_date: string;
}


