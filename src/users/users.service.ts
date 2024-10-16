import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client'; // Assurez-vous que cette ligne est présente.

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    console.log('ID Before Prisma Call:', id, 'Type:', typeof id);
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    console.log('User trouvé:', user);
    return user;
  }

  async getMe(userId: number) {
    console.log('User ID:', userId);
    return this.findOne(userId);
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}