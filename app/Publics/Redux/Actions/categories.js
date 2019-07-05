import axios from 'axios';
export const getCategories = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get('http://192.168.43.144:3000/categories')
    }
}

export const addCategories = (categoryName,urlImage) => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post('http://192.168.43.144:3000/categories',{
            category_name: categoryName,
            image_url: urlImage
        }),

    }
}

export const delCategories = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete('http://192.168.43.144:3000/categories/'+id)
    }
}