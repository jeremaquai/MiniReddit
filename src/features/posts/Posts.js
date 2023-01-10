import React from "react";

import { Link } from "react-router-dom";

import { 
    useSelector,
    useDispatch, 
} from "react-redux";

import { SubredditsDropdown } from "../subreddits/SubredditsDropdown";
import { changeActivePostId } from "../individualPost/individualPostSlice";
import { selectSearchTerm } from "../searchBar/searchSlice";
import {selectPosts} from "./postsSlice";
import { PostFooter } from "../PostFooter/PostFooter";

export default function Posts() {

    const activeSearchInput = useSelector(selectSearchTerm);
    const posts = useSelector(selectPosts);
     
    const dispatch = useDispatch();

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));

    return (
        <div className="posts">
            {/* <SubredditsDropdown /> */}
            
            {filteredPosts.map(post => (
                <section className='post' key={post.id}>
                 {/* <Likes postUps={post.ups} />  */}

                <div className='postBody'>
                    <Link to={"/individualPost"} onClick={() => dispatch(changeActivePostId(post.name))}>
                        <h2>{post.title}</h2>
                        <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                        {post.selftext.length > 600 ? <p className='readMore'>read more...</p> : null}
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} />
                    </Link>
                    <PostFooter postId={post.id}
                        postAuthor={post.author}
                        postCreated={post.created_utc}
                        postPermalink={post.permalink}
                        postComments={post.num_comments}
                        visible={false}
                    />
                </div>
                </section>))}
        </div>
    );
};
