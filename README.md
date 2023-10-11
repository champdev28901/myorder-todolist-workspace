# ข้อสอบ Full Stack Developer
## 1. ให้พัฒนาระบบ CRUD อย่างง่าย
### ToDoList CRUD app
### Tool
- Fornt-End : Angular + TailwindUI
- Back-End : NestJs + PostgreSQL
- Testing : Jest

### Start the app
- To start the development server run FrontEnd `npm run start:client`. Open your browser and navigate to http://localhost:4200/. 
- To start the development server run BackEnd `npm run start:server`. Open your browser and navigate to http://localhost:8000. to api 
- To start both the development server run FrontEnd & BackEnd `npm run start`. Open your browser and navigate to http://localhost:4200.  
- To start Unit Test `npm run test:all`.

## 2. ถ้ามีระบบสำหรับรับข้อความแชทจาก Facebook Page ผ่านทาง Webhook ไป process ต่อ วันละ 1000 ข้อความต่อวินาทีแบบ Real Time โดยที่ process time ต่อ 1 ข้อความประมาณ 1 วินาที จะออกแบบระบบ, ทดสอบ และ Monitoring อย่างไร
1 สร้างแบบ scalable เพื่อดำเนินการประมวลผลข้อความและส่งไปยังฐานข้อมูลหรือไปยัง service อื่น ๆ ตามต้องการ.
2 ข้อความที่รับมาและประมวลผลในลักษณะ asynchronous ป้องกันการ lose message ในกรณีที่ service ประมวลผลล้มเหลวหรือทำงานช้า.
3 ใช้ฐานข้อมูลที่มีประสิทธิภาพสูงและรองรับการเขียนในระดับที่สูง, ทั้ง NoSQL และ SQL หรือ RealtimeDataBase ขึ้นอยู่กับความต้องการ. 
4 ทดสอบที่ endpoint ที่ต่อกับ Facebook webhook และทดสอบการทำงานของ Message
5 จัดการ logs

## 3 .จงออกข้อสอบเองพร้อมเฉลย
- 1 คำถาม : interceptor มีหน้าที่อะไร ใน angular
    คำตอบ : การแก้ไข Request HTTP,  การแก้ไข Response HTTP, การทำ caching, การจำลอง Response
- 2 คำถาม : 



