import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TodoList } from './entities/todo.entity';
import { Repository } from 'typeorm';

describe('TodosService', () => {
  let service: TodosService;
  let repositoryMock: jest.Mocked<Repository<TodoList>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestingModule],
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

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
