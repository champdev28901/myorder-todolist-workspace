import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoList } from './entities/todo.entity';


interface ExpectedResultType {
  resData: unknown;
  resStatus: string;
  resMessage: string;
}

describe('TodosController', () => {
  let controller: TodosController;
  let service: TodosService;
  let repositoryMock: jest.Mocked<Repository<TodoList>>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [
        TodosService,
        {
          provide: getRepositoryToken(TodoList),
          useValue: {
            find: jest.fn(),
          },
        }
      ],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(service).not.toBeDefined();
  });



});
