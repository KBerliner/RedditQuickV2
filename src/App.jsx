import { useEffect } from 'react'
import './App.css'

// import importedData from './falseData';

import { useDispatch, useSelector } from 'react-redux'
import  { loadThesePosts, selectPosts } from './features/post/postSlice';
import { loadAllSubreddits, selectSubreddits } from './features/subreddit/subredditSlice';

// Importing the Components
import PostGrid from './components/PostGrid/PostGrid';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const dispatch = useDispatch();
  let posts = useSelector(selectPosts);
  let subreddits = useSelector(selectSubreddits);
  // console.log(subreddits);
  
  useEffect(() => {
    dispatch(loadThesePosts({}));
    dispatch(loadAllSubreddits());
  }, [dispatch]);

  return (
    <>
      <SearchBar subredditList={subreddits} />
      <PostGrid posts={posts.length > 0 ? posts : []} />
    </>
  )
}

export default App
