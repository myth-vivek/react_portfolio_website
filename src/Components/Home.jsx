import React, { useRef } from 'react'
import logo from '../images/logo.png'
import CustomHook from './CustomHook'

function Home() {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <div>
      <section className='home' ref={refTab}>
        <div className="content">
          <div className="name">
            My name is <span>Vivek</span>
          </div>
          <div className="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iure deleniti maiores magnam! Rem cumque ducimus aspernatur odio possimus atque.
             Saepe rerum rem tempore quidem placeat reiciendis maiores laudantium molestiae.
          </div>
          <a href="/cv.pdf" target='_blank' rel=''> Download my CV</a>
        </div>
        <div className="avatar">
          <div className="card">
            <img src={logo} alt="" />
              <div className="info">
                <div>Developer</div>
                <div>Nepalese</div>
                <div>Developer</div>  
                <div>Male</div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
