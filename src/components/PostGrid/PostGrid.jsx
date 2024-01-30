import React from 'react';
import PostThumbnail from '../PostThumbnail/PostThumbnail';

import styles from './PostGrid.module.css';

export default function PostGrid({ posts }) {
    // console.log(posts);
    
    return (
        <>
            <ul className={styles.grid_container}>
                {posts.length > 0 ? posts.map(post => <PostThumbnail key={post.id} subreddit={post.subreddit_name_prefixed} preview={post.preview} title={post.title} text={post.selftext} />) : <h1>There are no posts to be displayed right now.</h1>}
            </ul>
        </>
    )
}