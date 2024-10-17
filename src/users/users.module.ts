import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'MY_SECRET',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class UsersModule {}
