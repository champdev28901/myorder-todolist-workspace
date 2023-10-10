import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoList } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { SumTodoDto } from './dto/sum-todo.dto';

@Injectable()
export class TodosService {

  constructor(
    @InjectRepository(TodoList)
    private todoRepository: Repository<TodoList>,
  ) { }

  create(createTodoDto: CreateTodoDto) {
    createTodoDto.create_date = new Date().toString()
    createTodoDto.update_date = new Date().toString()
    const todoList = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todoList);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    updateTodoDto.update_date = new Date().toString()
    return this.todoRepository.update(id, updateTodoDto);
  }

  findAll(source?: string): Promise<TodoList[]> {
    if (source) {
      return this.todoRepository.find({
        where: { source },
        order: { id: 'DESC' },
      });
    }

    return this.todoRepository.find({
      order: {
        update_date: 'DESC',
      },
    });
  }

  findOne(id: number): Promise<TodoList | null> {
    return this.todoRepository.findOneBy({ id });;
  }

  remove(id: number) {
    return this.todoRepository.delete({ id });
  }

  async sumAll() {
    const sumTodoDto: SumTodoDto = {
      vueTotal: await this.todoRepository.count({ where: { source: 'vue' } }),
      reactTotal: await this.todoRepository.count({ where: { source: 'react' } }),
      angularTotal: await this.todoRepository.count({ where: { source: 'angular' } }),
      nextTotal: await this.todoRepository.count({ where: { source: 'next' } }),
      allTotal: await this.todoRepository.count()
    };
    return sumTodoDto;
  }
}
