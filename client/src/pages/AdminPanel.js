import React, { useEffect, useState } from 'react'
import './AdminPanel.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
function AdminPanel() {
  let [users, setUsers] = useState([])
  // let [userCount, setUserCount] = useState(0)
  // let [ownerCount, setOwnerUserCount] = useState(0)
  async function getAllUser() {
    let url = "http://localhost:5000/getalluser"
    let ownerCarData = await axios.get(url)
    // console.log(ownerCarData.data)
    setUsers(ownerCarData.data)

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].type === 'user') {
    //     setUserCount(users.length)
    //   } 
    // }
    // setUserCount(users.length)
    // setOwner(ownerCarData.data[0])
    // console.log(owner)
  }



  useEffect(() => {
    getAllUser()

  }, [])
  return (
    < div >
      <div><Navbar /></div>
      <div className="container">
        <div className='users' >
          <h1>Users List</h1>
          <table>
            <tr>
              <th>User Name</th>
              <th>User Type</th>
              <th>Password</th>
              {/* <th>Action</th> */}
            </tr>
            {
              users.length === 0 ? <p>Loading</p> :
                users.map((user, idx) => {
                  if (user.type === 'user') {
                    return (
                      <tr id={idx}>
                        <td>{user.username}</td>
                        <td>{user.type}</td>
                        <td>{user.password}</td>
                        {/* <td><button>Delete</button> <br /><button>Edit</button></td> */}
                      </tr>
                    )
                  }
                })
            }
          </table>
        </div>
        <div className='owners' >

          <h1> Owners List </h1>
          <table>
            <tr>
              <th>Owner Name</th>
              <th>User Type</th>
              <th>Password</th>
              {/* <th>Action</th> */}
            </tr>
            {
              users.length === 0 ? <p>Loading</p> : users.map((user, idx) => {
                if (user.type === 'car-owner') {
                  return (
                    <tr id={idx}>
                      <td>{user.username}</td>
                      <td>{user.type}</td>
                      <td>{user.password}</td>
                      {/* <td><button>Delete</button> <br /><button>Edit</button></td> */}
                    </tr>
                  )
                }
              })
            }


          </table>
        </div>
      </div>

    </div >
  )
}

export default AdminPanel