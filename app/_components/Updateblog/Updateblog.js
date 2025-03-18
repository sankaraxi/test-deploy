'use client';

import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Updateblog({ id }) {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [blogImage, setBlogImage] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    }
  });

  useEffect(() => {
    // Fetch existing blog details
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://medsafe-test-deploy.vercel.app/api/news/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data.category_id);
          setTitle(data.news_title);
          setShortTitle(data.news_short_title);
          setImagePath(data.image);
          setDate(data.date);
          setContent(data.news_content);
          
          // Update editor content when data is loaded
          if (editor && data.news_content) {
            editor.commands.setContent(data.news_content);
          }
        } else {
          toast.error('Failed to fetch news.');
        }
      } catch (error) {
        toast.error('An error occurred while fetching news.');
      }
    };

    fetchBlogData();
  }, [id, editor]);

  const handleEditBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category_id', category);
    formData.append('news_title', title);
    formData.append('news_short_title', shortTitle);
    formData.append('date', date);
    formData.append('news_content', content);
    if (blogImage) {
      formData.append('image', blogImage);
    }
    
    try {
      const response = await fetch(`https://medsafe-test-deploy.vercel.app/api/news/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        toast.success('News updated successfully.');
        window.location.href='/adminview';
      } else {
        toast.error('Failed to update News.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the News.');
    }
  };

  const EditorMenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className="editor-toolbar border p-2 mb-2 bg-light rounded">
        <div className="d-flex flex-wrap gap-1">
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
            Numbered List
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
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleEditBlog}>
        <div className="form-group row mt-5 mb-2">
          <label className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select
              className="form-control form-control1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="1">Newsletter</option>
              <option value="2">Announcement</option>
              <option value="3">Articles</option>
            </select>
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Short Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={shortTitle}
              onChange={(e) => setShortTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Image</label>
          <div className="col-sm-10">
            {imagePath && (
              <img
                src={`https://medsafe-test-deploy.vercel.app/api/uploads/${imagePath}`}
                alt="Blog"
                style={{ maxWidth: '100%', marginBottom: '10px' }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="form-control form-control1"
              onChange={(e) => setBlogImage(e.target.files[0])}
            />
          </div>
        </div>

        <div className="my-3 row form-group">
          <label htmlFor="date" className="col-sm-2">
            Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              id="date"
              className="form-control form-control1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Content</label>
          <div className="col-sm-10">
            <EditorMenuBar />
            <div className="form-control1 rounded-2 p-2" style={{ minHeight: '200px', backgroundColor: 'white' }}>
              <EditorContent editor={editor} className="prose max-w-none" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn blogsubbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Updateblog;