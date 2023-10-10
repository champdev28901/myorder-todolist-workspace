import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getDataAll(): { message: string } {
    return { message: 'Hello API All' };
  }

  getDataTodo(todoId: string): { message: string } {
    return { message: `Todo with ID ${todoId}` };
  }
}
