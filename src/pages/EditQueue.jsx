import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import QueueService from "../services/QueueService";
import swal from "sweetalert";

function EditQueue() {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;
     let [queue, setQueue] = useState({
       queue_number:"",
       firstname:"",
       lastname:"",
       tel:"",
       cartype:"",
       car_plate:"",
     });
   
    const fetchQueue = (id) => {
        QueueService.get(id)
        .then((res) => {
            setQueue(res.data.data);
          console.log(res.data.data);
        })
        .catch((e) => console.log(e));
    };
   
    useEffect(() => {
        fetchQueue(id);
    }, []);
   
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setQueue({ ...queue, [name]: value });
    };
    const saveQueue = (e) => {
      e.preventDefault();
      QueueService.update(id, queue)
        .then((res) => {
          swal({
            icon: "success",
            text: "แก้ไขข้อมูลสำเร็จ",
            title: "ผลการดำเนินการ",
          });
          navigate("/queue");
        })
        .catch((e) =>
          swal({
            icon: "error",
            text: "Edit failed",
            title: "Result",
          })
        );
    };
   
     return (
       <MainLayout>
         <center>
           <div className="container mt-4 mb-4">
             <h3>
               <b>Edit Queue</b>
             </h3>
             <hr />
           </div>
           <div className="row">
             <div className="col-md-8 offset-md-2">
               <form onSubmit={saveQueue}>
                 <div className="mb-3 row">
                   <label htmlFor="inputName" className="col-4 col-form-label">
                     คิว
                   </label>
                   <div className="col-8">
                     <input
                       type="number"
                       className="form-control"
                       name="queue_number"
                       id="queue_number"
                       placeholder="คิว"
                       onChange={handleInputChange}
                       value={queue.queue_number}
                     />
                   </div>
                 </div>
                 <div className="mb-3 row">
                   <label htmlFor="inputName" className="col-4 col-form-label">
                     ชื่อ-นามสกุล
                   </label>
                   <div className="col-4">
                     <input
                       type="text"
                       className="form-control"
                       name="firstname"
                       id="firstname"
                       placeholder="ชื่อ"
                       onChange={handleInputChange}
                       value={queue.firstname}
                     />
                   </div>
                   <div className="col-4">
                     <input
                       type="text"
                       className="form-control"
                       name="lastname"
                       id="lastname"
                       placeholder="นามสกุล"
                       onChange={handleInputChange}
                       value={queue.lastname}
                     />
                   </div>
                 </div>
                 <div className="mb-3 row">
                   <label htmlFor="inputName" className="col-4 col-form-label">
                     เบอร์โทรศัพท์
                   </label>
                   <div className="col-8">
                     <input
                       type="text"
                       className="form-control"
                       name="tel"
                       id="tel"
                       placeholder="2500"
                       onChange={handleInputChange}
                       value={queue.tel}
                     />
                   </div>
                 </div>
                 <div className="mb-3 row">
                   <label htmlFor="inputName" className="col-4 col-form-label">
                     ประเภทรถ
                   </label>
                   <div className="col-8">
                     <input
                       type="text"
                       className="form-control"
                       name="cartype"
                       id="cartype"
                       placeholder="ประเภทรถ"
                       onChange={handleInputChange}
                       value={queue.cartype}
                     />
                   </div>
                 </div>
                 <div className="mb-3 row">
                   <label htmlFor="inputName" className="col-4 col-form-label">
                     ทะเบียนรถ
                   </label>
                   <div className="col-8">
                     <input
                       type="text"
                       className="form-control"
                       name="car_plate"
                       id="car_plate"
                       placeholder="2500"
                       onChange={handleInputChange}
                       value={queue.car_plate}
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
         </center>
       </MainLayout>
     );
   };
export default EditQueue