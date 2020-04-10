const initialState = {
    id: '',
    email: '',
    name: '',
    towns: [],
    contacts: [
        { name: 'ran', id: '1', level: 'Expert' },
        { name: 'nadav', id: '2', level: 'Novic' },
        { name: 'uri', id: '3', level: 'Advanced' },
        { name: 'dror', id: '4', level: 'Intermediate' },
        { name: 'ran', id: '5', level: 'Expert' },
        { name: 'nadav', id: '6', level: 'Novic' },
        { name: 'uri', id: '7', level: 'Advanced' },
        { name: 'dror', id: '8', level: 'Intermediate' },
        { name: 'dror', id: '9', level: 'Intermediate' },
        { name: 'ran', id: '11', level: 'Expert' },
        { name: 'nadav', id: '12', level: 'Novic' },
        { name: 'uri', id: '13', level: 'Advanced' },
        { name: 'dror', id: '14', level: 'Intermediate' },
        { name: 'ran', id: '15', level: 'Expert' },
        { name: 'nadav', id: '16', level: 'Novic' },
        { name: 'uri', id: '17', level: 'Advanced' },
        { name: 'dror', id: '18', level: 'Intermediate' },
        { name: 'dror', id: '19', level: 'Intermediate' },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
