import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';
import rotateIcon from '../../assets/Rotate.svg';

export default function SearchBar({ subredditList }) {
    const [params, setParams] = useState('');
    const [subreddit, setSubreddit] = useState('');
    const [isInputText, setIsInputText] = useState(true);

    return (
        <div className={styles.container}>
            <button className={styles.rotate_button} onClick={() => {setIsInputText(!isInputText)}}></button>
            {isInputText ? 
            <input className={styles.search_input} type="text" value={params} onChange={({ target }) => {setParams(target.value)}} placeholder="Search"  /> 
            :
            <select className={styles.subreddit_selector} value={subreddit} onChange={({ target }) => {setSubreddit(target.value)}}>
                {subredditList.map(subreddit => <option key={subreddit.id}>{subreddit.title}</option>)}
            </select>
            }
        </div>
    )
}