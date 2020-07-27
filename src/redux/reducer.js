let data = [
    {
        name: 'Asim', profilePic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        place: 'Banglore', detailPlace: 'Blue house road, 9th street, Banglore', status: 'pending'
    },
    {
        name: 'Arun', profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        place: 'Kochi', detailPlace: 'Blue house road, 9th street, Kochi', status: 'pending'
    },
    {
        name: 'Sara', profilePic: 'https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        place: 'Chennai', detailPlace: 'Blue house road, 9th street, Chennai', status: 'pending'
    },
    {
        name: 'Meena', profilePic: 'https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        place: 'Banglore', detailPlace: 'Blue house road, 9th street, Banglore', status: 'pending'
    },
    {
        name: 'Ziya', profilePic: 'https://images.unsplash.com/photo-1534523600533-71d091d911d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        place: 'Singapore', detailPlace: 'Blue house road, 9th street, Singapore', status: 'pending'
    }
]


export default (state = data, action) => {
    switch(action.type){
        case 'ACTIVE':
            let foo = [...state].find(item => item.name === action.payload)
            foo.status ='ACTIVE'
            return [...state]
        case 'SERVICES':
            let boo = [...state].find(item => item.name === action.payload)
            boo.status ='PAYMENT'
            return [...state]
        case 'PAYMENT':
            let zoo = [...state].find(item => item.name === action.payload)
            zoo.status ='PAYMENT'
            return [...state]
    default:
        return state
    }
}