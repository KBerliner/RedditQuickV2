import { useEffect } from 'react'
import './App.css'

// import importedData from './falseData';

import { useDispatch, useSelector } from 'react-redux'
import  { loadAllPosts, selectPosts } from './features/post/postSlice';

// Importing the Components
import PostGrid from './components/PostGrid/PostGrid';

function App() {
  const dispatch = useDispatch();
  let posts = useSelector(selectPosts);
  // console.log(posts);
  
  useEffect(() => {
    dispatch(loadAllPosts());
    
    // console.log(posts);

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
  }, [dispatch])

  return (
    <>
      <PostGrid posts={posts.length > 0 ? posts : []} />
    </>
  )
}

export default App
