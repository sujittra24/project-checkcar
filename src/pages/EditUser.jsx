import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EditUser = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [User, setUser] = useState({
    full_name:{
    first_name: "",
    last_name: ""
  },
    tel: "",
    address:{
    district: "",
    sub_district: "",
    province: "",
    country: "",
    zipcode: ""
  },
    username: "",
    password: "",
 });

  useEffect(() => {
    UserService.get(id)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    UserService.update(id,User)
      .then(() => {
        Swal.fire({
          icon: "warning",
          title: "ต้องการแก้ไขหรือไม่",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ตกลง",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "แก้ไขสำเร็จ",
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
      <h1 className="mt-3">Edit User</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveUser}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  placeholder="ชื่อจริง"
                  value={User.firstname}
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
                  value={User.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Tel
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="tel"
                  id="tel"
                  placeholder="เบอร์โทรศัพท์"
                  value={User.tel}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Address
              </label>
              <div className="col-8">
                <textarea
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="ที่อยู่"
                  value={User.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                รถ
              </label>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="cartype"
                  id="cartype"
                  placeholder="cartype"
                  value={User.cartype}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="car_plate"
                  id="car_plate"
                  placeholder="car_plate"
                  value={User.car_plate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Username
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={User.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Password
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={User.password}
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

export default EditUser;
