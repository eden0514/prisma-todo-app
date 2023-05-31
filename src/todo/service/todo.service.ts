import { Injectable } from '@nestjs/common';
import {PrismaService} from '../../prisma.service';
import {Todo} from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService : PrismaService){}
  //All Views
  async fetchAllTodos() : Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }
}
