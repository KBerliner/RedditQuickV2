import React from 'react';
import styles from './PostThumbnail.module.css';

export default function PostThumbnail({ title, text, preview, subreddit_name_prefixed }) {

    return (
        <>
            <li className={styles.thumbnail_container}>
                <h5>{title}</h5>
                {preview ? <img src={preview.images[0].source.url} /> : <p>{text}</p>}
            </li>
        </>
    )
}