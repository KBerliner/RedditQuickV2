import { useEffect } from 'react'
import './App.css'

import importedData from './falseData';

import { useDispatch, useSelector } from 'react-redux'
import  { loadPosts, selectPosts } from './features/post/postSlice';

function App() {
  const dispatch = useDispatch();
  let posts = useSelector(selectPosts).posts;

  useEffect(() => {

    // Imported Data is the false data from the falseData.js file
    dispatch(loadPosts(importedData));

    // fetch('https://api.reddit.com/r/popular.json').then(
    //   res => {
    //     if (!res.ok) {
    //       throw new Error("Network Error was not OK");
    //     };

    //     return res.json();
    //   }
    // ).then(
    //   data => {
    //   }
    // )
  }, [])

  return (
    <>
    </>
  )
}

export default App
