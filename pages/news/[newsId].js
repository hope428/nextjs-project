import {useRouter} from 'next/router'

function DetailPage(){
    const router = useRouter()

    //grabs dynamic url param for this page
    const newsId = router.query.newsId;

    // send request to backend api
    // fetch news item with newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage