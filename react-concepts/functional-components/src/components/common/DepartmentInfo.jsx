import React from 'react'

const DepartmentInfo = (deptinfo) => {
  return (
    <div>
      <div>
        <label>Department Name: <b>{deptinfo.name}</b></label>
      </div>
      <div>
        <label>Department Head: <b>{deptinfo.head}</b></label>
      </div>
    </div>
  )
}

export default DepartmentInfo