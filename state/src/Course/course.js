import React from 'react'
import Angular from '../images/angular.jpg'
import Bootstrap from '../images/bootstrap5.png'
import Backend from '../images/ccsharp.png'
import Frontend from '../images/kompleweb.jpg'
import "./course.css"

const courseMap = {
    Angular,
    Bootstrap,
    Backend,
    Frontend
}

function course({courseName}) {
    return (  
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt="course" />
        </div>
    );
}

export default course;
