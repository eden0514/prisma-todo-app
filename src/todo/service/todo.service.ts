import { Injectable } from '@nestjs/common';
import {PrismaService} from '../../prisma.service';
@Injectable()
export class TodoService {
  constructor(private prismaService : PrismaService){}
  
  
}
