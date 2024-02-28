import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import WorkOrderService from "../services/WorkOrderService";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EditWorkOrder = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const [workOrder, setWorkOrder] = useState({
      name: "",
      price: "",
      category: ""
    });
  
    useEffect(() => {
      WorkOrderService.get(id)
        .then((res) => {
          setWorkOrder(res.data.data); 
        })
        .catch((e) => console.log(e));
    }, [id]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setWorkOrder({ ...workOrder, [name]: value });
    };
  
    const saveWorkOrder = (e) => {
      e.preventDefault();
      WorkOrderService.update(id, workOrder)
        .then(() => {
          Swal.fire({
            icon: "warning",
            title: "ต้องการแก้ไขหรือไม่",
            showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "ตกลง"})
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "แก้ไขสำเร็จ",
          icon: "success",
        }).then(() => {
          navigate("/product")
        });
      }
    });
  })
        .catch((e) => console.log(e));
    };
  
  
  
    return (
      <MainLayout>
        <h1 className="mt-3">Edit Product</h1>
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
                    name="res_name"
                    id="res_name"
                    placeholder="Restaurant Name"
                    value={workOrder.work_id}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ชื่อ
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="img"
                    id="img"
                    placeholder="Image"
                    value={workOrder.img}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  นามสกุล
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={workOrder.name}
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
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={workOrder.price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ประเภท
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    id="category"
                    placeholder="Category"
                    value={workOrder.category}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ประเภท
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="detail"
                    id="detail"
                    placeholder="รายะลเอียด"
                    value={workOrder.detail}
                    onChange={handleInputChange}
                  />
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
export default EditWorkOrder