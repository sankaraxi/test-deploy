'use client';

import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Addblog.css";

function Addblog() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [title, setTitle] = useState(""); // State for blog title
  const [shortTitle, setShortTitle] = useState("");
  const [image, setImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [userRole, setUserRole] = useState("");

  
  
  // In Next.js we'll use router instead of useNavigate
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setUserRole(userRole);
    if (userRole !== "1") {
      handleNavigation("/medsafelogin"); // Redirect if not an admin
    }
  }, [userRole]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!category || !title || !shortTitle || !selectedDate || !image || !content) {
      toast.error('All fields are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append('category_id', category);
    formData.append('news_title', title);
    formData.append('news_short_title', shortTitle);
    formData.append('date', selectedDate);
    formData.append('image', image);
    formData.append('news_content', content);
  
    try {
      const response = await fetch('https://medsafe-test-deploy.vercel.app/api/news', {
        method: 'POST',
        body: formData, 
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      let data = null;
  
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text(); // Get raw response if not JSON
        return;
      }
  
      if (response.ok) {
        setTitle('');
        setContent('');
        setCategory('');
        setShortTitle('');
        setImage(null);
        setSelectedDate('');
        editor?.commands.setContent('');
        toast.success('News added successfully!');
        handleNavigation('/adminview');
      } else {
        toast.error(data.message || 'Failed to add news');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  // TipTap Editor Menu Bar
  const EditorMenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className="editor-toolbar mb-2 p-2 border bg-light rounded d-flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 1 }) ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 2 }) ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`btn btn-sm ${editor.isActive('bold') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`btn btn-sm ${editor.isActive('italic') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`btn btn-sm ${editor.isActive('underline') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Underline
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`btn btn-sm ${editor.isActive('strike') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Strike
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`btn btn-sm ${editor.isActive('blockquote') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Quote
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`btn btn-sm ${editor.isActive('bulletList') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Bullet List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`btn btn-sm ${editor.isActive('orderedList') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Ordered List
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`btn btn-sm ${editor.isActive('link') ? 'btn-secondary' : 'btn-outline-secondary'}`}
        >
          Link
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Image URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="btn btn-sm btn-outline-secondary"
        >
          Image
        </button>
      </div>
    );
  };
                                                                                                                                                                                                                                                                
  return (
    <div className="container bgblogs">
      <div className="row mx-1 mx-md-3">
        <h1 className="newshead pt-5 pb-1">News</h1>
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mt-3 mb-2 row form-group">
              <label className="col-sm-2">Category</label>
              <div className="col-sm-10">
                <select
                  className="form-select form-control1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="1">Newsletter</option>
                  <option value="2">Announcement</option>
                  <option value="3">Article</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                News Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Blog Short Title */}
            <div className="my-3 row form-group">
              <label htmlFor="shortTitle" className="col-sm-2">
                News Short Title 
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="shortTitle"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News Short title"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div className="my-3 row form-group">
              <label htmlFor="date" className="col-sm-2">
                Date 
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  id="date"
                  className="form-control form-control1 blogviewtitle"
                  value={selectedDate}
                  placeholder="MM/YY"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
            </div>
   
            {/* Image Upload */}
            <div className="form-group my-3 row">
              <label htmlFor="imageUpload" className="col-sm-2">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            {/* TipTap Editor */}
            <div className="form-group row my-3">
              <label className="col-sm-2">News Content</label>
              <div className="col-sm-10">
                <EditorMenuBar />
                <div className="form-control1 rounded-2 p-2" style={{ minHeight: '200px', backgroundColor: 'white' }}>
                  <EditorContent editor={editor} />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btnsub">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Addblog;