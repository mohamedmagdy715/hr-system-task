const url = "http://localhost:3001/";

export const getEmployees = () => async (dispatch) => {
    let data;
    try{
        const resp = await fetch(url + "employees");
        data = await resp.json();
    }
    catch(err){
        console.log(err)
    }
  dispatch({ type: "EMPLOYEES", payload: data });
};

export const searchEmployees = (searchKey) => {
  return {
    type: "SEARCH_EMPLOYEES_LIST",
    payload: searchKey,
  };
};

export const addEmployee = (employee) => async (dispatch) => {
  await fetch(url + "employees", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(employee),
  });
  dispatch({ type: "ADD_EMPLOYEE", payload: "Added Successfully" });
};

export const deleteEmployee = (id) => async (dispatch) => {
  await fetch(url + "employees/" + id, {
    method: "DELETE",
  });
  dispatch({ type: "DELETE_EMPLOYEE", payload: "Deleted Successfully" });
};
