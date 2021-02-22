import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "Mario Niam", id: 1},
        { title: "College Names", body: "lorem ipsum...", author: "Mark Phillips", id: 2},
        { title: "Football", body: "lorem ipsum...", author: "john Edward", id: 3},
        { title: "Tennis", body: "lorem ipsum...", author: "Spark Diana", id: 4}
    ]);

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)

}


    return (
        <div className="container-fluid">
       
         <BlogList blogs={blogs} titled="ALL BLOGS" handleDelete={handleDelete}/>
    
        </div>
  
    )
}

export default Home
