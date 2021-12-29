import React, { useEffect, useState } from "react";
import "./UserRegistration.css";
import { useDispatch} from 'react-redux';
import axios from "../../api/axios";
import { useHistory } from "react-router";
import { userAuth } from '../../context/actions';
import {
  FiHash,
  FiUser,
  FiSmile,
  FiAtSign,
  FiSliders,
  FiCheckSquare,
  FiTag,
  FiEdit,
  FiUserCheck,
  FiUserX,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useSelector} from 'react-redux';
import { chart_data } from "../../static/static_data";

function UserRegistration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newAdmin, setNewAdmin] = useState()
  const [allUsers, setAllUsers] = useState([]);
  const themeState = useSelector(state => state.themeState);

  useEffect(() => {
    axios
      .get("register")
      .then((products) => {
        setAllUsers(products?.data);
      })
      .catch((error) => console.error(error));
  }, [newAdmin]);
  const makeAdmin = async (upcomingAdminData) => {
    await axios.put(
      `register/${upcomingAdminData?._id}`,
      {
        role: "admin",
      },
      {
        headers: {
          "x-access-token": "token-value",
        },
      }
    ).then(newAdminUser => { 
      dispatch(userAuth(newAdminUser?.data)) 
      setNewAdmin(newAdminUser)
      history.push("/admin/registrations")
    }
      )
      .catch(error => console.log(error))
  };

  const makeUser = async (upcomingUserData) => {
    await axios.put(
      `register/${upcomingUserData?._id}`,
      {
        role: "user",
      },
      {
        headers: {
          "x-access-token": "token-value",
        },
      },
      
    ).then(newSimpleUser => 
    { 
      dispatch(userAuth(newSimpleUser?.data)) 
      setNewAdmin(newSimpleUser)
      history.push("/admin/registrations")
    })
      .catch(error => console.log(error))
  };

  const deleteUser = async (upcomingDeletedData) => {
    await axios.delete(
      `register/${upcomingDeletedData?._id}`
    ).then(deletedUser => console.log(deletedUser))
      .catch(error => console.log(error))
  };
  return (
    <div className={`userregistration${!themeState ? " dark" : " light"}`}>
      <h1 className="admin__title">Registration Records</h1>
      <div className="userregistration__container">
        <div className="reg__monthly">
          <div className="reg__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={chart_data}>
                <Bar dataKey="total" fill="#6d6d6d" radius={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="reg__title">Monthly User Registration</p>
        </div>
        <div className="reg__monthly">
          <div className="reg__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={chart_data}>
                <Bar dataKey="total" fill="#6d6d6d" radius={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="reg__title">Monthly User Registration</p>
        </div>
      </div>
      <div className="reg__table__container">
        <table className="reg__table">
          <thead>
            <tr className="reg__row">
              <th>
                <FiHash /> Number
              </th>
              <th>
                <FiSmile /> Avatar
              </th>
              <th>
                <FiUser /> Username
              </th>
              <th>
                <FiAtSign /> Email
              </th>
              <th>
                <FiSliders /> Role
              </th>
              <th>
                <FiCheckSquare /> Registered
              </th>
              <th>
                <FiTag /> Unique id
              </th>
              <th>
                <FiEdit /> Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(allUsers).isArray && allUsers?.map((user, index) => (
              <>
                <tr className="regbody__sep"></tr>
                <tr className="regbody__row">
                  <td className="reg__data">{index + 1}</td>
                  <td className="reg__data">
                    <div className="reg__avatar">
                      <img src={user.avatar} alt="" />
                    </div>
                  </td>
                  <td className="reg__data">{user.name}</td>
                  <td className="reg__data">{user.email}</td>
                  <td className="reg__data">{user.role}</td>
                  <td className="reg__data">{[...user.registeredTime].splice(0, [...user.registeredTime].indexOf("T")).join("")}</td>
                  <td className="reg__data">{user._id}</td>
                  <td className="reg__data">
                    <ul className="reg__upgrade">
                      <li
                        className="upgrade__options"
                        onClick={() => makeAdmin(user)}
                      >
                        <FiUserCheck />{" "}
                      </li>
                      <li className="upgrade__options" onClick={() => makeUser(user)}>
                        <FiUser />{" "}
                      </li>
                      <li className="upgrade__options" onClick={() => deleteUser(user)}>
                        <FiUserX />{" "}
                      </li>
                    </ul>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserRegistration;
