import React, { useEffect, useState } from 'react'
import TodoCards from '../components/TodoCards'
import { Col, Row } from 'react-bootstrap'
import { getAllTodo, postTodo } from '../services/apiServices/apiServices'
import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'

function Home() {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [render, setRender] = useState('')
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        getAllTodo().then(res => {
            setTodos(res.data)
            setLoading(false)

        })
            .catch(err => {
                setLoading(false)

            })
    }, [render])

    const onSubmit = () => {
        setLoading(true)
        if (!todo) {
            toast.error(`Can't Add Empty Todo !!!`)
            setLoading(false)

        }
        else {
            postTodo(todo).then(res => {
                setLoading(false)
                toast.success('Todo Added !!')
                setTodo('')
                setRender(res)
            })
                .catch(err => {
                    setLoading(false)
                    toast.success('Todo Adding Failed !!')

                })
        }

    }

    return (
        <div style={{ minHeight: "80vh" }}>
            <h1 className='text-center my-3'>To-Do List</h1>
            <Row className='w-100 px-5 '>
                <Col sm={11} md={11}>
                    <input type='text' className='form-control border border-0' placeholder='Todo List Text...' onChange={(e) => setTodo(e.target.value)} value={todo} />
                </Col>
                <Col sm={1} md={1}>
                    <button className='btn btn-success w-100  border border-0' onClick={() => onSubmit()}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </Col>
            </Row>
            {
                !loading ?
                    <Row className='my-5 w-100 px-5'>
                        {
                            todos.length <= 0 ?
                                <h3 className='text-center'>No Todos to show</h3>
                                :
                                todos.map(obj => (
                                    <Col sm={4}>
                                        <TodoCards data={obj} setRender={setRender} />
                                    </Col>
                                ))
                        }
                    </Row>
                    : <Spinner />
            }
        </div>
    )
}

export default Home
