import React from 'react';
import {row,colMd6} from 'bootstrap/dist/css/bootstrap.min.css'

export default class NoteList extends React.Component{
    render(){
        return <div>
            <div className={row}>
                <div className={colMd6}>
                    Note 1
                </div>
            </div>
            <div className={row}>
                <div className={colMd6}>
                    Note 2
                </div>
            </div>
        </div>;
    }
}