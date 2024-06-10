import { BadRequestException, Controller, Get } from '@nestjs/common';

@Controller('error')
export class ErrorController {

    @Get()
    Get() {
        throw new BadRequestException('Returning Error')
    }
}
