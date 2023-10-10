import { Module } from '@nestjs/common';
import { TodosModule } from '../todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from '../todos/entities/todo.entity';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [TodoList],
      ssl: true,
      synchronize: true,
    }),
    TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
