import React, { useState } from 'react'
import BlogPostPreview from '../components/BlogPostPreview'
import blogData from '../data/blogData' // Stellen Sie sicher, dass der Pfad korrekt ist
import { Routes, Route } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

const Documentation = () => {
  // Zustand für die Sucheingabe und die gefilterten Blogartikel
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBlogData, setFilteredBlogData] = useState(blogData)

  // Hier wird der Event-Handler für die Suche hinzugefügt
  const handleSearch = () => {
    const filteredData = blogData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredBlogData(filteredData)
  }

  return (
    <div className="mx-10">
      {/* Hier wird die Suchleiste eingefügt */}
      <input
        className="my-10 p-2 border rounded-l-md"
        type="text"
        placeholder="Search for a blog post"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="text-green-50 bg-green-900 hover:bg-green-600 transition border py-2 px-4 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
      {/* Hier werden die gefilterten Blogartikel dargestellt */}
      <div>
        {filteredBlogData.map((post) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
      {/* Neue Route für einzelne Blogseiten hinzufügen */}
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default Documentation
