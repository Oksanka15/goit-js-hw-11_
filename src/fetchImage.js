import axios from 'axios';
//fetch images
//API key: 31600931-0a470777dbdb6f40891ab4c3c

async function fetchImage(name, pages, perPage){
    const BASE_URL = 'https://pixabay.com/api/'
const key = '31600931-0a470777dbdb6f40891ab4c3c'
try{
    const response = await axios.get(
        `${BASE_URL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
    )
}
}