import React, { useState, useEffect} from "react";
import { useParams, NavLink, useNavigate  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import WorkOrderService from "../services/WorkOrderService";
import swal from "sweetalert";

const DeleteWorkOrder = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;
  
    const confirmDelete = () => {
      swal({
        icon: "warning",
        dangerMode: true,
        title: "Confirm",
        text: "ยืนยันการลบข้อมูลหรือไม่ ?",
        buttons: true,
    }).then((confirm) => {
      if (confirm) {
        UserService.remove(id)
        swal({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then((res) => navigate("/workorder"))
        .catch((e) => console.log(e));
    } else {
      // กลับไปหน้า Product
      navigate("/workorder");
    }
});
}
  
    useEffect(() => {
      confirmDelete();
    }, []);
    
    return (
      <MainLayout>
        <h1 className="mt-3">Delete Product</h1>
        <hr />
      </MainLayout>
    );
  };
export default DeleteWorkOrder