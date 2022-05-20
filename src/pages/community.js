import React from 'react';
import wpp from '../images/wpp.png';
import '../styles/community.css'

const Community = () => {
    return (
        <>
        <div className='community_container'>
            <h1>Community page</h1>
        </div>
            
            <div className="whatsapp" >
                <a href="https://api.whatsapp.com/send?phone=573053521012">
                    <img src={wpp} alt=""/>
                </a>
            </div>
        </>
    );
};
export default Community; 