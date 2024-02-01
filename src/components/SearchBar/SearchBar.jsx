import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadThesePosts } from '../../features/post/postSlice';

import styles from './SearchBar.module.css';

export default function SearchBar({ subredditList }) {
    const [params, setParams] = useState('');
    const [subreddit, setSubreddit] = useState('');
    const [isInputText, setIsInputText] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (subredditList[0]) {
            setSubreddit(subredditList[0].display_name_prefixed)
        }
    }, [subredditList])

    const handleSubmit = (e) => {
        e.preventDefault();

        let dataObject = {
            requestType: 'search',
            requestParameter: ''
        }

        if (isInputText) {
            dataObject.requestParameter = params;
        } else {
            dataObject.requestType = 'subreddit';
            dataObject.requestParameter = subreddit;
        }

        dispatch(loadThesePosts(dataObject));
    }

    return (
        <div className={styles.container}>
            <button className={styles.rotate_button} onClick={() => {setIsInputText(!isInputText)}}></button>
            {isInputText ? 
            <input className={styles.search_input} type="text" value={params} onChange={({ target }) => {setParams(target.value)}} placeholder="Search"  /> 
            :
            <select className={styles.subreddit_selector} value={subreddit} onChange={({ target }) => {setSubreddit(target.value)}}>
                {subredditList.map(subreddit => <option key={subreddit.id}>{subreddit.display_name_prefixed}</option>)}
            </select>
            }
            <button className={styles.submit_button} onClick={handleSubmit}>Submit</button>
        </div>
    )
}