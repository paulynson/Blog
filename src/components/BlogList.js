

const BlogList = ({blogs, titled, handleDelete}) => {


    return (
<div className="blog-list">
<h1 className="text-danger mb-5 px-3 py-4 shadow">{titled}</h1>
<hr />
{blogs.map((blog) => (
<div className="mt-2  p-3 blog-preview" key={blog.id}>
<h2 className="text-warning">{blog.title}</h2>
<p className="text-muted">Written by {blog.author}</p>

<button className="btn btn-outline-warning" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
</div>
             )) }

</div>

      );
}
 
export default BlogList;