import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcome to FormFusionDesigns.com';
  }
  log(message: string): void {
    console.log('welcome to FormFusionDesigns');
  }
}
