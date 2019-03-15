import { Link } from 'react-router-dom';
import React from 'react';

export default function NavItem(props){
    const data = props.data;
    return (
        <Link to={data['href']}>
            <i className='material-icons'>{data['icon']}</i>
            <span>{data['label']}</span>
        </Link>
    )
}