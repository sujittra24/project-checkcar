import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import WorkOrderService from "../services/WorkOrderService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewWorkOrder = () => {
    let navigate = useNavigate();
    let [workOrder,setWorkOrder] = useState({});
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setWorkOrder({ ...workOrder, [name]: value });
    };
    const saveWorkOrder = (e)=>{
      e.preventDefault();
      WorkOrderService.create(workOrder)
      .then((res)=>{
        Swal.fire({
          icon: "warning",
          title: "ต้องการเพิ่มเมนูหรือไม่",
          showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "ตกลง"})
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "เพิ่มเมนูสำเร็จ",
        icon: "success",
      }).then(() => {
        navigate("/workorder")
      });
    }
  });
  })
      .catch((e)=>console.log(e));
    }
    return (
      <MainLayout>
        <h1 className="mt-3">สร้างใบสั่งงาน</h1>
        <hr />
        <div className="row">
          <div className="col-md-8 offset-md-2"> 
            <form onSubmit={saveWorkOrder}>
            <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  เลขที่ใบสั่งงาน
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="work_id"
                    id="work_id"
                    placeholder="WORK ID"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ชื่อ-นามสกุลลูกค้า
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    placeholder="ชื่อ"
                    onChange={handleInputChange}
                  />
                
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="นามสกุล"
                    onChange={handleInputChange}
                  />
                
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  รายละเอียด
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="detail"
                    id="detail"
                    placeholder="รายละเอียด"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ราคา
                </label>
                <div className="col-8">
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="ราคา"
                    onChange={handleInputChange}
  
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ประเภท
                </label>
                <div className="col-8">
                  <select
                    className="form-control"
                    name="category"
                    id="category"
                    placeholder="ประเภท"
                    onChange={handleInputChange}>
                    <option value="">Select...</option>
                    <option value="general">ทั่วไป</option>
                    <option value="hard">ปานกลาง</option>
                    <option value="basic">ง่าย</option>
                    <option value="mainternance">ซ่อมบำรุง</option>
      </select>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </MainLayout>
    );
  };

export default NewWorkOrder