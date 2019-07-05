import axios from 'axios';

export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get('http://192.168.43.144:3000/notes')
    }
}


export const searchNotes = (keyword) => {
    return {
        type: 'GET_SEARCH_NOTES',
        payload: axios.get('http://192.168.43.144:3000/notes?search='+keyword) 
    }
}

export const getLoadData = (page) => {
    return {
        type: 'GET_LOAD_NOTES',
        payload: axios.get('http://192.168.43.144:3000/notes?page='+page)
    }
}

export const sortNotes = (value) => {
    return {
        type: 'GET_SORT_NOTES',
        payload: axios.get('http://192.168.43.144:3000/notes?sort='+value)
    }
}

export const addNotes = (notesTitle,notesContent,notesCategory) => {
    return {
        type: 'POST_NOTES',
        payload: axios.post('http://192.168.43.144:3000/notes',{
            title: notesTitle,
            note: notesContent,
            category: notesCategory

        }),
    }
}

export const delNotes = (id) => {
    return {
        type: 'DEL_NOTES',
        payload: axios.delete(`http://192.168.43.144:3000/notes/`+id,
        )
    }
}

export const updNotes = (id, notesTitle, notesContent, notesCategory) => {
    return {
        type: 'UPD_NOTES',
        payload: axios.patch('http://192.168.43.144:3000/notes/'+id,{
            title: notesTitle,
            note: notesContent,
            category_name: notesCategory
        })
    }
}

export const getNotesById = (id) => {
    return {
        type: "CATEGORY_NOTES",
        payload: axios.get('http://192.168.43.144:3000/categories/'+id)
    }
}