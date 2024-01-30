import React from 'react';
import PostThumbnail from '../PostThumbnail/PostThumbnail';

export default function PostGrid({ posts }) {
    // console.log(posts);
    
    return (
        <>
            <ul>
                {posts.length > 0 ? posts.map(post => <PostThumbnail key={post.id} preview={post.preview} title={post.title} text={post.selftext} />) : <h1>There are no posts to be displayed right now.</h1>}
            </ul>
        </>
    )
}