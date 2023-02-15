const express = require("express");
const { AdminModel } = require("../models/adminModel");
const { TeacherModel } = require("../models/teacherModel");
const { StudentModel } = require("../models/studentModel");
const { NoticeModel } = require("../models/noticeModel");
const { ReportModel } = require("../models/reportModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let admins = await AdminModel.find();
    let students = await StudentModel.find();
    let teachers = await TeacherModel.find();
    let reports = await ReportModel.find();
    let notices = await NoticeModel.find();

    let data = {
      admin: admins.length,
      student: students.length,
      report: reports.length,
      teacher: teachers.length,
      notice: notices.length,
    };
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;

