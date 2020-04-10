import React from 'react';
import '../../styles/contactList.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default ({ contact, toggleSelected, selected }) => {
    const { name, avatar, level, id } = contact;
    return (
        <div
            style={{ backgroundColor: selected && '#ececec' }}
            className="contactListItem_container"
            onClick={() => toggleSelected(id)}
        >
            <Avatar alt={contact.name} src={avatar} />
            <div className="contactListItem_content">
                <p className="contactListItem_primaryTitle">{name}</p>
                <p className="contactListItem_secondaryTitle">{level}</p>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                {selected && (
                    <CheckCircleOutlineIcon style={{ color: '#0033FF' }} />
                )}
            </div>
        </div>
    );
};
