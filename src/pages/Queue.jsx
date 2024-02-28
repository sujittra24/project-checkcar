import React ,{useState, useEffect}from 'react'
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import QueueService from "../services/QueueService";
import { BsPersonPlusFill } from "react-icons/bs";
const Queue = () => {
  const [Queue, setQueue] = useState([]);
  const fetchQueue = ()=>{
    QueueService.getAll()
    .then((res)=>{
      console.log(res.data.data)
      setQueue(res.data.data)
    })
    .catch((e)=>{
      console.log(e)
    });
  }
  useEffect(()=>{
    fetchQueue()
  },[]);
  return (
    <MainLayout>
      <h1 className="mt-3">ข้อมูลการจองคิว</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/queue/new">
          <BsPersonPlusFill size={50}/>
          </NavLink>
        </div>
      </div>
      <div className="row">
        {
          Queue.map((queue)=>(
          <UserCard key={queue._id} queue={queue}/>
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
              <h5>{props.queue.queue_number}</h5>
              <h6> {props.queue.firstname}  {props.queue.lastname}</h6>
              <h5>{props.queue.cartype} {props.queue.car_plate}</h5>
              <div className="col-12 d-flex justify-content-end">
              <NavLink
                to={"/queue/edit/" + props.queue._id}
                className="btn btn-warning"
              >
                แก้ไข
              </NavLink>{" "}
              <NavLink
                to={"/queue/delete/" + props.queue._id}
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

export default Queue