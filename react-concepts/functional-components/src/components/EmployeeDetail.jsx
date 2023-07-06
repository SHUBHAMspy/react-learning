import React from 'react'
import DepartmentInfo from './common/DepartmentInfo'

const EmployeeDetail = (employee) => {
  return (
    <div>
      <h1> Employee Details </h1>
      <div>
        <label>Employee ID: <b>{employee.id}</b></label>
      </div>
      <div>
        <label>Employee Name: <b>{employee.name}</b></label>
      </div>
      <div>
        <label>Employee Location: <b>{employee.location}</b></label>
      </div>
      <div>
        <label>Employee Salary: <b>{employee.salary}</b></label>
      </div>
      <DepartmentInfo name={employee.deptname} head={employee.depthead}></DepartmentInfo>
    </div>
  )
}

const element = <EmployeeDetail id="1" name="Rock" location="Goa" salary="23456" deptname="Frontend" depthead="Chris"/>
export default element