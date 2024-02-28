import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import WorkOrderService from "../services/WorkOrderService";
import { FcPlus } from "react-icons/fc";


function WorkOrder() {
    const [workorders, setWorkOrders] = useState([]);
    const [searchOrder, setSearchOrder] = useState("");
    useEffect(() => {
      const timer = setTimeout(() => {
        if (searchOrder.trim() !== "") {
          WorkOrderService.search(searchQuery)
            .then((res) => {
              console.log(res.data.data);
              setWorkOrders(res.data.data);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          WorkOrderService.getAll()
            .then((res) => {
              console.log(res.data.data);
              setWorkOrders(res.data.data);
            })
            .catch((e) => {
              console.log(e);
            });
        }
      }, 500); // Adjust the debounce time as needed
  
      return () => clearTimeout(timer);
    }, [searchOrder]);
  
    const handleSearchChange = (e) => {
      setSearchOrder(e.target.value);
    };
    return (
      <MainLayout>
        <h1 className="mt-3">ใบสั่งงาน</h1>
        <hr />
        <div className="row">
          <div className="col d-flex justify-content-end">
          <div className="col-4">
          <input
              type="text"
              className="form-control"
              placeholder="ค้นหาเลขที่ใบสั่งงาน"
              value={searchOrder}
              onChange={handleSearchChange}
            />
            </div>
            <NavLink to="/workorder/new" >
            <center>
            <FcPlus size={35}/>
            </center>
            </NavLink>
          </div>
        </div>
        
        <div className="row mt-2 row-cols-lg-1 row-cols-2 g-2">
          {workorders.map((work) => (
            <WorkOrderCard key={work._id} work={work} />
          ))}
        </div>
      </MainLayout>
    );
  };
  const WorkOrderCard = (props) => {
    return (
      <>
      <div className="row">
        <div className="container">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                <h5>{props.work.firstname} {props.work.lastname}</h5>
                <h5>{props.work.work_id}</h5>
                <h6>{props.work.category}</h6>
                <div className="col d-flex justify-content-end">
                  <NavLink
                    to={"/workorder/" + props.work._id}
                    className="btn btn-primary"
                  >
                    ดูเพิ่มเติม
                  </NavLink>{" "}
                  <NavLink
                    to={"/workorder/edit/" + props.work._id}
                    className="btn btn-warning"
                  >
                    แก้ไข
                  </NavLink>{" "}
                  <NavLink
                    to={"/workorder/delete/" + props.work._id}
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
        </div>
      </>
    );
  };
export default WorkOrder