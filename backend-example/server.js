const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// In-memory data store (replace with a real database)
let posts = [
  {
    id: uuidv4(),
    title: 'Welcome to Mallu Backend',
    content: 'This is your first post! Your app is successfully connected to the backend.',
    authorId: '1',
    author: {
      id: '1',
      name: 'System',
      email: 'system@mallu.app',
      createdAt: new Date().toISOString()
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let users = [
  {
    id: '1',
    name: 'System',
    email: 'system@mallu.app',
    createdAt: new Date().toISOString()
  }
];

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Mallu Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Get all posts
app.get('/api/posts', (req, res) => {
  try {
    // Simulate some processing delay
    setTimeout(() => {
      res.json(posts);
    }, 500);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch posts',
      error: error.message 
    });
  }
});

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  try {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch post',
      error: error.message 
    });
  }
});

// Create a new post
app.post('/api/posts', (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title and content are required' 
      });
    }

    const newPost = {
      id: uuidv4(),
      title,
      content,
      authorId: '1', // Default to system user
      author: users.find(u => u.id === '1'),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    posts.unshift(newPost); // Add to beginning of array
    
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create post',
      error: error.message 
    });
  }
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  try {
    const { title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === req.params.id);
    
    if (postIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    const updatedPost = {
      ...posts[postIndex],
      ...(title && { title }),
      ...(content && { content }),
      updatedAt: new Date().toISOString()
    };

    posts[postIndex] = updatedPost;
    
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update post',
      error: error.message 
    });
  }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  try {
    const postIndex = posts.findIndex(p => p.id === req.params.id);
    
    if (postIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Post not found' 
      });
    }

    posts.splice(postIndex, 1);
    
    res.json({ 
      success: true, 
      message: 'Post deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete post',
      error: error.message 
    });
  }
});

// Get all users
app.get('/api/users', (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch users',
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mallu Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📝 API Base URL: http://localhost:${PORT}/api`);
}); 