import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpService } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  //.setTitle('Report API SIT Environment')
   .setTitle('Report API UAT Environment')
  // .setTitle('Report API GLS Environment')
  // .setTitle('Report API MR Environment')
  // .setTitle('Report API Production Environment')
  .setDescription('<h1>The Report API description</h1>'
                  )
  // .setVersion('1.0')
  .setVersion('version 1.0.9.3')
    .addTag('reports')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api', app, document);
  await app.listen(8085);
  // await app.listen(9095);

  // var http = await require('http');
  // http.createServer(function(req, res) {
  //   var html = buildHtml(req);
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html',
  //     'Content-Length': html.length,
  //     'Expires': new Date().toUTCString()
  //   });
  //   res.end(html);
  // },'/ping').listen(8086);

  // function buildHtml(req) {
  //   var header = '';
  //   var body = 'Success';
  
  //   return '<!DOCTYPE html>'
  //        + '<html><head>' + header + '</head><body>' + body + '</body></html>';
  // };

}
bootstrap();
