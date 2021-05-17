<div>
/*<MaterialTable
  icons={tableIcons}
  options={{
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: true,
    pageSizeOptions: [10, 20, 30],
  }}
  columns={[
    { title: "Priority", field: "task" },
    { title: "Task", field: "task" },
  ]}
  data={tableData}
  editable={{
    onRowAdd: (newData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          /*setData([...data, newData]);

          resolve();*/
        }, 1000);
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          /*const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        
        resolve()*/
        }, 1000);
      }),
  }}
  title="To Do List"
/>*/
