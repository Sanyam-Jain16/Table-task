import React, { useState } from "react";
import { styles } from "./styles";

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
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.head}>First Name</th>
            <th style={styles.head}>Last Name</th>
            <th style={styles.head}>Email</th>
            <th colSpan="2" style={styles.head}>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <tr>
                    <td style={styles.body}>{item.first_name}</td>
                    <td style={styles.body}>{item.last_name}</td>
                    <td style={styles.body}>{item.email}</td>
                    <td style={styles.body} onClick={() => handleClick(item)}>
                      Edit
                    </td>
                    <td style={styles.body} onClick={() => handleDelete(item)}>
                      Delete
                    </td>
                  </tr>
                  {item.id === id && (
                    <tr>
                      <td style={styles.tdHidden}>
                        <input
                          placeholder="first name"
                          type="text"
                          value={newData.first_name}
                          onChange={(e) => handleOnChange(e)}
                          name="first_name"
                          style={styles.tdHiddentext}
                        />
                      </td>
                      <td style={styles.tdHidden}>
                        <input
                          type="text"
                          value={newData.last_name}
                          onChange={(e) => handleOnChange(e)}
                          name="last_name"
                          placeholder="last name"
                          style={styles.tdHiddentext}
                        />
                      </td>
                      <td style={styles.tdHidden}>
                        <input
                          type="text"
                          value={newData.email}
                          onChange={(e) => handleOnChange(e)}
                          name="email"
                          placeholder=" email"
                          style={styles.tdHiddentext}
                        />
                      </td>
                      <td>
                        <button
                          style={styles.editButton}
                          onClick={() => handleUpdate()}
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
