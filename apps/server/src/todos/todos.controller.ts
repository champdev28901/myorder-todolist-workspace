import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { responseParse } from '../utils/response.panal';
import { ResMessageEnum } from '../utils/constant/code.enum';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      await this.todosService.create(createTodoDto);
      return responseParse(ResMessageEnum.CREATE_SUCCESS, 1, null)
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      await this.todosService.update(id, updateTodoDto)
      return responseParse(ResMessageEnum.UPDATE_SUCCESS, 1, null)
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll(@Query('source') source: string) {
    try {
      return responseParse(ResMessageEnum.QUERYING_SUCCESSFUL, 1, await this.todosService.findAll(source));
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('summary')
  async sumAll() {
    try {
      return responseParse(ResMessageEnum.QUERYING_SUCCESSFUL, 1, await this.todosService.sumAll());
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return responseParse(ResMessageEnum.QUERYING_SUCCESSFUL, 1, await this.todosService.findOne(+id));
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.todosService.remove(+id)
      return responseParse(ResMessageEnum.DELETE_SUCCESS, 1, null)
    } catch (error) {
      throw new HttpException(
        responseParse(ResMessageEnum.ERROR, 0, null),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
