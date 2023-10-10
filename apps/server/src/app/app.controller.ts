import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getAllTodo() {
  //   return this.appService.getDataAll();
  // }

  // // @Get()
  // // getTodo() {
  // //   return this.appService.getData();
  // // }

  // @Get(':todoId')
  // findOne(@Param('todoId') todoId: string) {
  //   return this.appService.getDataTodo(todoId);
  // }
}
