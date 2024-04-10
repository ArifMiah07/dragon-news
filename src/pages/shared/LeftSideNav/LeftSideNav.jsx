import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch(`categories.json`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    return (
        <div>
            <h1 className="text-2xl">Category</h1>
            <div className="flex flex-col px-3 py-1">
                {
                    categories.map((category)=> <Link to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;