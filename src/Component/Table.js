import React, { useState } from "react";
import { table } from "./styles";

function Table() {
  const tableData = JSON.parse(localStorage.getItem("items"));
  const [users, setUsers] = useState(tableData);
  const [id, setId] = useState(-1);
  const [newData, setNewData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  });

  const handleClick = (item) => {
    setNewData({
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      id: item.id,
    });
    setId(item.id);
  };
  
  const handleOnChange = (value) => {
    setNewData({ ...newData, [value.target.name]: value.target.value, id });
  };

  const handleUpdate = () => {
    setId(-1);
    const oldData = JSON.parse(localStorage.getItem("items"));
    oldData.splice(newData.id - 1, 1);
    oldData.push(newData);
    oldData.sort((a, b) => {
      if (a.id - b.id > 0) return 1;
      if (a.id - b.id < 0) return -1;
      return 0;
    });
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(oldData));
    setUsers(oldData);
  };

  const handleDelete = () => {
    const oldData = JSON.parse(localStorage.getItem("items"));
    oldData.splice(newData.id - 1, 1);

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(oldData));
    setUsers(oldData);
  };

  return (
    <div style={table.container}>
      <table style={table.table}>
        <thead>
          <tr>
            <th style={table.head}>First Name</th>
            <th style={table.head}>Last Name</th>
            <th style={table.head}>Email</th>
            <th colSpan="2" style={table.head}>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {item.id === id ? (
                    <tr>
                      <td style={table.tdHidden}>
                        <input
                          placeholder="first name"
                          type="text"
                          value={newData.first_name}
                          onChange={(e) => handleOnChange(e)}
                          name="first_name"
                          style={table.tdHiddentext}
                        />
                      </td>
                      <td style={table.tdHidden}>
                        <input
                          type="text"
                          value={newData.last_name}
                          onChange={(e) => handleOnChange(e)}
                          name="last_name"
                          placeholder="last name"
                          style={table.tdHiddentext}
                        />
                      </td>
                      <td style={table.tdHidden}>
                        <input
                          type="text"
                          value={newData.email}
                          onChange={(e) => handleOnChange(e)}
                          name="email"
                          placeholder=" email"
                          style={table.tdHiddentext}
                        />
                      </td>
                      <td>
                        <button
                          style={table.editButton}
                          onClick={() => handleUpdate()}
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ):  <tr>
                  <td style={table.body}>{item.first_name}</td>
                  <td style={table.body}>{item.last_name}</td>
                  <td style={table.body}>{item.email}</td>
                  <td style={table.body} onClick={() => handleClick(item)}>
                    Edit
                  </td>
                  <td style={table.body} onClick={() => handleDelete(item)}>
                    Delete
                  </td>
                </tr>}
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
