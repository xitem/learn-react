import React from 'react'

const Button = ({text, onButtonClick}) => {

const name ="홍길동";
const href ="http://naver.com";
const handleClick =() => {
onButtonClick(text);
}

  return (
    <div className='button'>
      <button type="button" onclick={handleClick}>{text}</button>
      
      <a href={href} target='blank'>링크이동</a>
      <p>안녕하세요 {name}입니다.</p>
    </div>

    )
}

export default Button