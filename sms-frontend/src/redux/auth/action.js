import * as types from "./types";
import axios from "axios";


//login student
export const StudentLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_STUDENT_REQUEST });
    const res = await axios.post(
      `http://localhost:4000/students/login`,

      data
    );
    dispatch({
      type: types.LOGIN_STUDENT_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_STUDENT_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//login teacher
export const TeacherLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_TEACHER_REQUEST });
    const res = await axios.post(
      `http://localhost:4000/teachers/login`,

      data
    );
    dispatch({
      type: types.LOGIN_TEACHER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_TEACHER_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

//login admin
export const AdminLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_ADMIN_REQUEST });
    const res = await axios.post(
      `http://localhost:4000/admin/login`,
      data
    );
    dispatch({
      type: types.LOGIN_ADMIN_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: types.LOGIN_ADMIN_ERROR,
      payload: {
        message: error,
      },
    });
  }
};

// register Teacher
export const TeacherRegister = (data) => async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/teachers/register`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// register student
export const StudentRegister = (data) => async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/students/register`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// REGISTER ADMIN
export const AdminRegister = (data) => async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/admin/register`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// REGISTER bus
export const BusRegister = (data) => async (dispatch) => {
  try {
    await axios.post(
      `http://localhost:4000/bus/add`,
      data
    );
  } catch (error) {
    console.log(error);
  }
};

// logout user
export const authLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: types.AUTH_LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

//update student
export const UpdateStudent = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_STUDENT_REQUEST });
    const res = await axios.patch(
      `http://localhost:4000/students/${id}`,
      data
    );
    dispatch({ type: types.EDIT_STUDENT_SUCCESS, payload: res.data.user });
  } catch (error) {
    console.log(error);
  }
};

//update teacher
export const UpdateTeacher = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_TEACHER_REQUEST });
    const res = await axios.patch(
      `http://localhost:4000/teachers/${id}`,
      data
    );
    dispatch({ type: types.EDIT_TEACHER_SUCCESS, payload: res.data.user });
  } catch (error) {
    console.log(error);
  }
};

//send password
export const SendPassword = (data) => async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/admin/password`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//forgot password
export const forgetPassword = (data) => async () => {
  try {
    const res = await axios.post(
      `http://localhost:4000/admin/forgot`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
