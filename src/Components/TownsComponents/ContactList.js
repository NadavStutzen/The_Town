import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import '../../styles/contactList.css';

export default (props) => {
    const contacts = useSelector(({ User }) => User.contacts);
    const [selected, setSelected] = useState({});
    const { handleSelectContacts } = props;

    const toggleSelected = (id) => {
        setSelected({ ...selected, [id]: !selected[id] });
        handleSelectContacts({ ...selected, [id]: !selected[id] });
    };

    return (
        <div className="contactList_container">
            {contacts.map((contact) => {
                return (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}
                        toggleSelected={toggleSelected}
                        selected={selected[contact.id]}
                    />
                );
            })}
        </div>
    );
};
