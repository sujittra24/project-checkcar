import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CreateUser = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = (e) => {
    e.preventDefault();
    UserService.create(user)
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
              navigate("/user");
            });
          }
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <MainLayout>
      <h1 className="mt-3">New User</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveUser}>
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
                  placeholder="ชื่อจริง"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="นามกสุล"
                  onChange={handleInputChange}
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
                  placeholder="เบอร์โทรศัพท์"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                ที่อยู่
              </label>
              <div className="col-8">
                <textarea
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="ที่อยู่"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                ชื่อผู้ใช้
              </label>
              <div className="col-4">
                <select
                  className="form-control"
                  name="cartype"
                  id="cartype"
                  placeholder="ประเภทรถ"
                  onChange={handleInputChange}
                >
                  <option value="">กรุณาเลือก</option>
                  <option value="sedan">Sedan</option>
                  <option value="coupe">Coupe</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="crossover">Crossover</option>
                  <option value="suv">SUV</option>
                  <option value="ppv">PPV</option>
                  <option value="fourwd">4WD</option>
                  <option value="wagon">Wagon</option>
                  <option value="offroad">Offroad</option>
                  <option value="sport">Sport</option>
                </select>
              </div>
                <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="car_plate"
                  id="car_plate"
                  placeholder="ทะเบียนรถ"
                  onChange={handleInputChange}
                />
            </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                ชื่อผู้ใช้
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                รหัสผ่าน
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
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
export default CreateUser;
