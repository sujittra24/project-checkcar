import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import QueueService from "../services/QueueService";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewQueue = () => {
    let navigate = useNavigate();
    let [Queue, setQueue] = useState({});
  let [user, setUser] = useState([]);

  const fetchUser = () => {
    UserService.getAll()
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setQueue({ ...Queue, [name]: value });
    };
    const saveQueue = (e) => {
      e.preventDefault();
      QueueService.create(Queue)
        .then((res) => {
          Swal.fire({
            icon: "warning",
            title: "ต้องการเพิ่มสมาชิกหรือไม่",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ตกลง",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "เพิ่มสมาชิกสำเร็จ",
                icon: "success",
              }).then(() => {
                navigate("/queue");
              });
            }
          });
        })
        .catch((e) => console.log(e));
    };
    return (
      <MainLayout>
        <h1 className="mt-3">New Queue</h1>
        <hr />
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
                    placeholder="หมายเลขคิว"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ชื่อ-นามสกุล
                </label>
                <div className="col-4">
                <select
                          type="select"
                          className="form-select"
                          name="firstname"
                          id="firstname"
                          onChange={handleInputChange}
                        >
                          <option>--เลือก--</option>
                                    {user.map((user) => (
                                        <option value={user.firstname}>{user.firstname}</option>
                                    ))}
                        </select>
                </div>
                <div className="col-4">
                <select
                          type="select"
                          className="form-select"
                          name="lastname"
                          id="lastname"
                          onChange={handleInputChange}
                        >
                          <option>--เลือก--</option>
                          {user.map((user) => (
                            <option value={user.lastname}>{user.lastname}</option>
                          ))}
                        </select>
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
                    placeholder="เบอร์โทรศัพท์"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  ทะเบียนรถ
                </label>
                  <div className="col-3">
                  <input
                    type="text"
                    className="form-control"
                    name="car_plate"
                    id="car_plate"
                    placeholder="ทะเบียนรถ"
                    onChange={handleInputChange}
                  />
              </div>
              ประเภท
              <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    name="cartype"
                    id="cartype"
                    placeholder="ประเภทรถ"
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

export default NewQueue