import React, { Component } from 'react';
import Book from './uploaderPageComps/Book';
import Department from './uploaderPageComps/Department';
import Employee from './uploaderPageComps/Employee';

class ContactPage extends Component {
    render() { 
        return <div className='container'>
            <Department />
            <Employee />
            <Book />
        </div>;
    }
}
 
export default ContactPage;