import React, { useState } from 'react';
import ContactList from './ContactList';
import SelectedContact from './SelectedContact';
import '../../styles/createTown.css';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input';
import MaterialInput from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default () => {
    const [selectedContacts, setSelectedContacts] = useState([]);
    const contacts = useSelector(({ User }) => User.contacts);
    const [townName, setTownName] = useState('');

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

    const onSubmit = (e) => {
        e.preventDefault();
        if (!townName) {
            return;
        }
        console.log('name ', townName);
        console.log('contacts', selectedContacts);
        setTownName('');
        setSelectedContacts([]);
    };

    return (
        <div className="createTown_container">
            <ContactList handleSelectContacts={handleSelectContacts} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={onSubmit}>
                    <Input
                        label="Town Name"
                        onChange={(e) => setTownName(e.target.value)}
                        value={townName}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Create
                    </Button>
                </form>
                <div className="createTown_selectedBox">
                    {selectedContacts.map((c) => (
                        <SelectedContact key={c.id} contact={c} />
                    ))}
                </div>
            </div>
        </div>
    );
};
