import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Follows } from './follows.model';

@Module({
  providers: [FollowsService],
  controllers: [FollowsController],
  imports: [
    SequelizeModule.forFeature([Follows]),
  ]
})
export class FollowsModule {}
