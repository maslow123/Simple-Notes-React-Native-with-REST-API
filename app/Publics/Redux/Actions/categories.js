import axios from 'axios';

let url = 'http://192.168.100.21:3000/categories';
export const getCategories = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(url)
    }
}

export const addCategories = (categoryName,urlImage) => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post(url,{
            category_name: categoryName,
            image_url: urlImage
        }),

    }
}

export const delCategories = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(url+'/'+id)
    }
}