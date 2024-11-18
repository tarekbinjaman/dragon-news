import { useLoaderData } from "react-router-dom";
import NewsCart from "../Components/NewsCart";

const CategoryNews = () => {
    const {data: news} = useLoaderData();

    console.log(news);
    return (
        <div>
            <div>
                <h2 className="font-bold">Dragon News Home</h2>
                <p className="text-gray-400 text-base">News on this category {news.length}</p>
            </div>
            <div>
                {
                    news.map(singleNews => <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;