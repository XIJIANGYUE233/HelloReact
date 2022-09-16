import React,{useContext} from 'react';
import styles from './robots.module.css' 
import {appContext} from '../index'

interface RobotProps{
    id:number,
    name:string,
    email:string
}

const Robot :React.FC<RobotProps>=({id,name,email})=>{
    const value =useContext(appContext) 
    return <div className={styles.cardContainer}>
    <img alt='robot'  src={`https://robohash.org/${id}`}></img>
    <h2>{name}</h2>
    <p>{email}</p> 
    <p>{value.username} </p>
    </div>; 
}

export default Robot;