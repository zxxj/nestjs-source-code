import { Controller } from './@nestjs/common/controller.decorator'
import { Get } from './@nestjs/common/httpMethod.decorator'

@Controller()
export class AppController {
  @Get('hello')
  hello(): string {
    return 'hello'
  }
}
