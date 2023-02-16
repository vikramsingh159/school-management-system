import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DLogin from './../pages/Dashboard/Dashboard-Login/DLogin';
import FrontPage from './../pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage';
import AddTeacher from './../pages/Dashboard/Main-Dashboard/AllPages/Admin/AddTeacher';
import AddStudent from './../pages/Dashboard/Main-Dashboard/AllPages/Admin/AddStudent';
import AllDoubts from './../pages/Dashboard/Main-Dashboard/AllPages/Admin/AllDoubts';
import AddAdmin from './../pages/Dashboard/Main-Dashboard/AllPages/Admin/AddAdmin';
import AddNotices from './../pages/Dashboard/Main-Dashboard/AllPages/Admin/AddNotice';
import CheckReports from './../pages/Dashboard/Main-Dashboard/AllPages/Teacher/CheckReports';
import CreateReports from './../pages/Dashboard/Main-Dashboard/AllPages/Teacher/CreateReport';
import TeacherProfile from './../pages/Dashboard/Main-Dashboard/AllPages/Teacher/TeacherProfile';
import AddDoubt from './../pages/Dashboard/Main-Dashboard/AllPages/Student/AddDoubt';
import StudentProfile from './../pages/Dashboard/Main-Dashboard/AllPages/Student/StudentProfile';


const RoutConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DLogin />} />
                <Route path="*" element={<FrontPage />} />
                <Route path="/dashboard" element={<FrontPage />} />
                <Route path="/addteacher" element={<AddTeacher />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/doubts" element={<AllDoubts />} />
                <Route path="/admin" element={<AddAdmin />} />
                <Route path="/addnotice" element={<AddNotices />} />
                <Route path="/checkreports" element={<CheckReports />} />
                <Route path="/createreport" element={<CreateReports />} />
                <Route path="/teacherprofile" element={<TeacherProfile />} />
                <Route path="/adddoubt" element={<AddDoubt />} />
                <Route path="/studentprofile" element={<StudentProfile />} />
            </Routes>
        </>
    )
}

export default RoutConfig