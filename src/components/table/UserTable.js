import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserService } from "../../services/UserService";

export default function () {
  let [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => {
        setState({
          ...state,
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

  

    <div className="p-5">
  
        <h3>User List</h3>
      <Table striped bordered hover fluid>
        <thead>
          <tr>
            <th>#</th>
           
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {
            state.users.length>0 && state.users.map(
                (user)=>{
                    return(
                        <tr key={user.id}>
                    
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    
                  </tr>
                    )
                }
            )
        }

        </tbody>
      </Table>
    </div>
  );
}
