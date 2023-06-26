import axios from './api'

export const ArticleService={
    async getArticles(){
        const res= await  axios.get('/articles')
        return res.data
    }
}