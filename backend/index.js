import express from 'express'
import {config} from 'dotenv';
import cors from "cors";
import { dbconnection } from './config/connectDb.js';
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";


import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";
import usersRouter from "./router/usersRouter.js"
import adminRegisterRouter from "./router/adminRegisterRouter.js"
import  { errorHandler } from "./middlewares/errorHandler.js";

app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
  });

const app = express();
config();
dbconnection();
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.json());


app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/assignments", assignmentRouter);

app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/attendance", attendanceRouter);

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/register", adminRegisterRouter);


app.listen(PORT ,(err)=>{
    console.log(`server running on ${PORT}`);
    
})