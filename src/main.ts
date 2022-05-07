import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  // Initiating the Application.
  const app = await NestFactory.create(AppModule);

  // Using Global Validation.
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Using Swagger.
  const config = new DocumentBuilder()
    .setTitle('I Love Pizza API Documentation.')
    .setDescription('an API to Create Your Own Pizza as You love.')
    .setVersion('1.0')
    .addTag('pizza')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
