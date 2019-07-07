import axios from 'axios';

const url = "http://192.168.100.21:3000/notes";
const urlCategories = "http://192.168.100.21:3000/categories";

export const getNotes = (search="",sort="desc") => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(url+'?search='+search+'&sort='+sort)
    }
}

export const getLoadData = (page) => {
    return {
        type: 'GET_LOAD_NOTES',
        payload: axios.get(url+'?page='+page)
    }
}

export const addNotes = (Title,Content,Category) => {
    return {
        type: 'POST_NOTES',
        payload: axios.post(url,{
            title: Title,
            note: Content,
            category: Category

        }),
    }
}

export const delNotes = (id) => {
    return {
        type: 'DEL_NOTES',
        payload: axios.delete(url+'/'+id)
    }
}

export const updNotes = (id, notesTitle, notesContent, notesCategory) => {
    return {
        type: 'UPD_NOTES',
        payload: axios.patch(url+'/'+id,{
            title: notesTitle,
            note: notesContent,
            category_name: notesCategory
        })
    }
}

export const getNotesById = (id) => {
    return {
        type: "CATEGORY_NOTES",
        payload: axios.get(urlCategories+'/'+id)
    }
}