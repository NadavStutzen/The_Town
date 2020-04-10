import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../../styles/createTown.css';

export default ({ contact }) => {
    return (
        <div className="selectedContact_container">
            <Avatar alt={contact.name} src={contact.avatar} />
            <p>{contact.name}</p>
        </div>
    );
};
