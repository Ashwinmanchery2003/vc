import { useState } from "react";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:"NEW CALL",body:"my first website",author:"vignesan",id:1},
        {title:"JOIN CALL",body:"welcome to my  website",author:"sreevari",id:2},
    ]);
    const handleClick= () => {
        setName("Vignesan");
    };
    return (  
        <div className="home">
            {blogs.map(blog => (
    <div key={blog.id}>{blog.title}</div>
))}

        </div>
    );
};
 
export default Home;