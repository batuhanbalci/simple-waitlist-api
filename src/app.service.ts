import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async joinWaitlist(dto: UserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException("You're already on the waitlist!");
        }
      }
      throw error;
    }
  }
}
