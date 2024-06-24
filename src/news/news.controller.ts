import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto, UpdateNewsDto } from './news.dto';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Get()
    findAll() {
        return this.newsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.newsService.findOne(Number(id));
    }

    @Post()
    create(@Body(new ValidationPipe()) createNewsDto: CreateNewsDto) {
        const { title, description, category, editorFirstName, editorLastName } = createNewsDto;
        return this.newsService.create(title, description, category, editorFirstName, editorLastName);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.newsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body(new ValidationPipe()) updateNewsDto: UpdateNewsDto) {
        const { title, description, category, editorFirstName, editorLastName } = updateNewsDto;
        return this.newsService.update(id, title, description, category, editorFirstName, editorLastName);
    }
}
