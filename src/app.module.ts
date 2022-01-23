import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { Photos } from './photos/photos.model';
import { LikesModule } from './likes/likes.module';
import { Likes } from './likes/likes.model';
import { FollowsModule } from './follows/follows.module';
import { Follows } from './follows/follows.model';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './comments/comments.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASS),
      database: process.env.POSTGRES_DB,
      models: [User, Photos, Likes, Follows, Comments],
      autoLoadModels: true
    }),
    UsersModule,
    PhotosModule,
    LikesModule,
    FollowsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
