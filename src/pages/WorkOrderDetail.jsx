import react,{ useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import { useParams, NavLink } from "react-router-dom";
import WorkOrderService from "../services/WorkOrderService";
function WorkOrderDetail() {
    let params = useParams();
    let id = params.id;
    let [workOrder, setWorkOrder] = useState({});
    const fetchFoodMenu= (id)=>{
      WorkOrderService.get(id)
      .then((res)=>{
        setWorkOrder(res.data.data);
      })
      .catch((e)=>console.log(e));
    }
    useEffect(()=>{
      fetchFoodMenu(id)
    },[]);
    return (
      <MainLayout>
        <h1 className="mt-3">{workOrder.name}</h1>
        <hr />
        <div className="row mt-3">
          <div className="col-md-4">
            <img src={`/images/${workOrder.img}`} alt="" style={{ width:'100%', borderRadius:'10%'}}/>
          </div>
          <div className="col-md-8 border p-4">
          <p>
              <label htmlFor="" className="lblStyle">
              เลขที่ใบสั่งงาน:{" "}
              </label>{" "}
              {workOrder.work_id}
            </p>
          <p>
              <label htmlFor="" className="lblStyle">
                ชื่อ:{" "}
              </label>{" "}
              {workOrder.firstname}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                นามสกุล:{" "}
              </label>{" "}
              {workOrder.lastname}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                ราคา:{" "}
              </label>{" "}
              {workOrder.price}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                ประเภท:{" "}
              </label>{" "}
              {workOrder.category}
            </p>
            <p>
              <label htmlFor="" className="lblStyle">
                รายละเอียด:{" "}
              </label>{" "}
              {workOrder.detail}
            </p>
            <p className="text-center">
            <NavLink
                to={"/workorder"}
                className="btn btn-primary"
              >
                กลับไปหน้าหลัก
              </NavLink>
            </p>
          </div>
        </div>
      </MainLayout>
      
    );
  };

export default WorkOrderDetail