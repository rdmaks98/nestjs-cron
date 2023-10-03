import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private schedulerRegistry: SchedulerRegistry) { }
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second(optional)
  
  getHello() {
    return "hello world";
  }

  @Cron('1 * * * * *')
  triggerCronJob() {
    console.log("Calling the method every second");
  }
}
