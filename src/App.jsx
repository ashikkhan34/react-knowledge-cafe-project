
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {

  const [bookMarks, setBookMarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookMarks,blog]
    setBookMarks(newBookmarks)
  }

  const handleMarkAsRead = time =>{ 
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
