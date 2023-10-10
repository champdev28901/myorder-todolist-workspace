import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-icy-hall-69487714-pooler.ap-southeast-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'e1M5JEwyBcTO',
      database: 'verceldb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      synchronize: true, // ใช้ในการพัฒนา ไม่ควรใช้ใน production
    }),
  ],
})
export class ConfigModule {}
