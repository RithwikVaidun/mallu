# Mallu Backend Example

A simple Express.js backend server for your Mallu React Native app.

## Features

- ✅ REST API endpoints for posts and users
- ✅ CORS enabled for mobile app access
- ✅ Error handling and validation
- ✅ In-memory data storage (easily replaceable with a database)
- ✅ Health check endpoint

## Quick Start

### 1. Install Dependencies

```bash
cd backend-example
npm install
```

### 2. Start the Server

For development (with auto-restart):
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Test the API

Visit `http://localhost:3000/health` to check if the server is running.

## API Endpoints

### Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get a specific post |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health status |

## Example API Calls

### Create a Post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Post", "content": "This is the content of my post"}'
```

### Get All Posts
```bash
curl http://localhost:3000/api/posts
```

## Connecting to Your React Native App

1. Make sure the backend server is running on `http://localhost:3000`
2. Your React Native app is already configured to connect to this URL in development
3. Tap "Show API Example" in your app to test the connection

## Environment Variables

You can set these environment variables:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Database Integration

This example uses in-memory storage. To add a real database:

### Option 1: MongoDB with Mongoose
```bash
npm install mongoose
```

### Option 2: PostgreSQL with Prisma
```bash
npm install prisma @prisma/client
```

### Option 3: SQLite with better-sqlite3
```bash
npm install better-sqlite3
```

## Deployment Options

### Heroku
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `git push heroku main`

### Railway
1. Connect your GitHub repo
2. Deploy automatically

### Vercel
1. `npm install -g vercel`
2. `vercel --prod`

### DigitalOcean App Platform
1. Connect your GitHub repo
2. Configure build settings

## Security Considerations

For production use, consider adding:

- Authentication (JWT tokens)
- Rate limiting
- Input validation/sanitization
- HTTPS enforcement
- Environment-based configuration
- Database connection pooling
- Logging and monitoring

## Troubleshooting

### Can't connect from mobile app?

1. Make sure the backend server is running
2. Check that your mobile device/emulator can reach `localhost:3000`
3. For physical devices, use your computer's IP address instead of `localhost`
4. Update the `API_BASE_URL` in your React Native app's `services/api.ts`

### CORS errors?

The server includes CORS middleware, but if you're still getting errors:
1. Check the server logs
2. Verify the request headers
3. Ensure the frontend URL is correct 