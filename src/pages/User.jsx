import React ,{useState, useEffect}from 'react'
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import UserService from "../services/UserService";
import { BsPersonPlusFill } from "react-icons/bs";
const User = () => {
  const [User, setUser] = useState([]);
  const fetchUser = ()=>{
    UserService.getAll()
    .then((res)=>{
      console.log(res.data.data)
      setUser(res.data.data)
    })
    .catch((e)=>{
      console.log(e)
    });
  }
  useEffect(()=>{
    fetchUser()
  },[]);
  return (
    <MainLayout>
      <h1 className="mt-3">ข้อมูลลูกค้าทั้งหมด</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/user/new" className="btn btn-success">
          <BsPersonPlusFill />
          </NavLink>
        </div>
      </div>
      <div className="row">
        {
          User.map((user)=>(
          <UserCard key={user._id} user={user}/>
          ))
        }
      </div>
    </MainLayout>
  )
}
const UserCard = (props) => {
  
  return (
    <>
    <div className="row">
      <div className="col-12">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-text">
              <h2> {props.user.firstname}  {props.user.lastname}</h2>
              <h5>{props.user.tel}</h5>
              <div className="col-12 d-flex justify-content-end">
              <NavLink
                to={"/user/" + props.user._id}
                className="btn btn-primary"
              >
               ดูเพิ่มเติม
              </NavLink>{" "}
              <NavLink
                to={"/user/edit/" + props.user._id}
                className="btn btn-warning"
              >
                แก้ไข
              </NavLink>{" "}
              <NavLink
                to={"/user/delete/" + props.user._id}
                className="btn btn-danger"
              >
                ลบ
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};
export default User