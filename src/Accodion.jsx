import React from 'react'
import QuestionApi from './data'
import List from './list';

import "./accodion.css"



console.log(QuestionApi);
function Accodion() {
   

    return (

        <>
            <div className="main">
                <div className="card">
                    <div className='head'>
                        React Interview Questions
                    </div>
                    <div className='contant' >
                        {QuestionApi.map((ques) => {
                            const { id} = ques
                            return <List key={id} { ...ques }/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accodion
