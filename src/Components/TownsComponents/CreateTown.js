import React, { useState } from 'react';
import ContactList from './ContactList';
import SelectedContact from './SelectedContact';
import '../../styles/createTown.css';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
    const [selectedContacts, setSelectedContacts] = useState([]);
    const contacts = useSelector(({ User }) => User.contacts);

    const handleSelectContacts = (selectedIdsObj) => {
        // setSelectedContacts(newSelectedContacts);
        const selectedArray = [];
        for (let id in selectedIdsObj) {
            if (selectedIdsObj[id]) {
                selectedArray.push(contacts.find((c) => c.id === id));
            }
        }
        setSelectedContacts(selectedArray);
    };

    return (
        <div className="createTown_container">
            <ContactList handleSelectContacts={handleSelectContacts} />
            <div className="createTown_selectedBox">
                {selectedContacts.map((c) => (
                    <SelectedContact key={c.id} contact={c} />
                ))}
            </div>
        </div>
    );
};
