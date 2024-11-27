import React from 'react'
import Button from '../components/Button'
import Message from '../components/Message'
import Counter from '../components/Counter'
import Welcome from '../components/Welcome'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div> 
    <Link 
        className='block bg-sky-400'
        to={('/login')}>로그인 하러 가기 </Link> 


    <Button />
    <Message />
    <Counter />
    <Welcome name="홍길동" message="오늘도 좋은하루보내세요" />
    </div>
  )
}

export default Home