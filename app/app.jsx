import React from 'react';
import {containerFluid,navbar,navbarDefault,navbarHeader,navbarBrand} from 'bootstrap/dist/css/bootstrap.min.css';
import {siteHeading,notesBrand} from './styles/common.css';
import NoteList from './components/notes/noteList.jsx';

export default class App extends React.Component {
  render () {
    return<div>
        <nav className={`${navbar} ${navbarDefault} ${siteHeading}`}>
            <div className={containerFluid}>
                <div className={`${navbarHeader}`}>
                    <div id="notes-brand" className={`${siteBrand}`}>Notes</div>
                </div>
            </div>
        </nav>  
        <div className={containerFluid}>
            <NoteList/>
        </div>
    </div>;
  }
}
