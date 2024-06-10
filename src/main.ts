import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from './utils/config';
import { config } from 'dotenv';

async function bootstrap() {
  if (process.env.NODE_ENV !== 'production') config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(getConfig('PORT') || 3000);
}
bootstrap();
