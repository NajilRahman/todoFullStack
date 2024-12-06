import React from 'react'
import { Col, Row } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { deleteTodo, updateTodo } from '../services/apiServices/apiServices'

function TodoCards({ data ,setRender}) {


        //delete Todo
    const delTodo = (id) => {

        deleteTodo(id).then(res => {
            toast.success('Todo Deleted Successfully')
            setRender(res)
        })
        .catch(err => {
                toast.error('Todo Failed To Deleted ')
        })
    }

    //update Todo
   const updTask=(id,todoData)=>{
        const datas=todoData
        datas.isCompleted=!datas.isCompleted
        updateTodo(id,datas).then(res => {
            toast.success('Todo Updated Successfully')
            setRender(res)

        })
        .catch(err => {
                toast.error('Todo Failed To Update ')
        })
   }

    return (
        <div className='card bg-light border border-0 my-2' style={{ minHeight: '250px' }}>
            <div><span className='d-flex justify-content-end align-items-center mx-3 mt-3'>{data.Date.split('T')[0]}</span></div>
            <hr />
            <div className='text-body w-100 text-center mb-2 px-3'>
                <p className='text-dark'> {data.todo}</p>
            </div>
            <hr />
            {
                data.isCompleted?
                <Row className='d-flex justify-content-center align-items-center   p-4' >
                <Col sm={6}>
                    <button className='btn btn-dark border border-0 w-100 mb-1 'onClick={()=>updTask(data._id,data)} ><i class="  fa-regular fa-calendar-check text-success fa-xl"></i></button>
                </Col>
                <Col sm={6}>
                    <button className='btn btn-dark border border-0 w-100  mb-1 ' onClick={()=>delTodo(data._id)}><span className='me-2'>Completed</span><i class="fa-solid fa-calendar-minus text-danger fa-xl"></i></button>
                </Col>
                </Row>
                :<Row className='d-flex justify-content-center align-items-center   p-4' >
                <Col sm={6}>
                    <button className='btn btn-dark border border-0 w-100 mb-1 'onClick={()=>updTask(data._id,data)} ><i class="  fa-regular fa-calendar-check text-success fa-xl"></i></button>
                </Col>
                <Col sm={6}>
                    <button className='btn btn-dark border border-0 w-100  mb-1 ' onClick={()=>delTodo(data._id)}><i class="fa-solid fa-calendar-minus text-danger fa-xl"></i></button>
                </Col>

            </Row>
            }
        </div>
    )
}

export default TodoCards
