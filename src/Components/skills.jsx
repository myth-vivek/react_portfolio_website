import React, { useRef, useState } from 'react'
import {faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomHook from './CustomHook';

function Skills() {
    const scrollTab = useRef();
    const divs = useRef([]);
    const [listSkills] = useState([
        {
            name: 'HTML',
            des: 'lorem',
            icon: faHtml5
        },
        {
            name: 'CSS',
            des: 'lorem',
            icon: faCss3
        },
        {
            name: 'Javascript',
            des: 'lorem',
            icon: faJs
        },
        {
            name: 'React',
            des: 'lorem',
            icon: faReact
        },
        {
            name: 'laravel',
            des: 'lorem',
            icon: faLaravel
        },
        {
            name: 'Vue.js',
            des: 'lorem',
            icon: faVuejs
        },
    ])
    CustomHook(scrollTab, divs)
  return (
    <section className="skills" ref={scrollTab}> 
        <div className="title" ref={(el) => el && divs.current.push(el)}>
            This is my skills
        </div>
        <div className="des" ref={(el) => el && divs.current.push(el)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic nihil veniam asperiores magni excepturi porro perspiciatis dolorem, voluptas, tempore, at sequi error impedit enim beatae. Suscipit magni voluptas quibusdam ducimus!
        </div>
        <div className="list">
            {
                listSkills.map((value, key) => (
                    <div key={key} className='item' ref={(el) => el && divs.current.push(el)}>
                        <FontAwesomeIcon icon={value.icon} />
                        <h3>{value.name}</h3>
                        <div className='des'>{value.des}</div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Skills
