import { Body, Controller,Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { error } from 'console';



@Controller('tasks')
export class TaskController {
   
    constructor(private readonly taskService:TaskService){}

 @Post()
 create(@Body() task :TaskDto){

  this.taskService.create(task)
 console.log(error)

 }


}
