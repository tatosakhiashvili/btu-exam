import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ErrorModule } from './error/error.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [UsersModule, ErrorModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
