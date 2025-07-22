# Backend Integration Guide for Mallu App

Your React Native app is now set up with a complete API integration layer! Here's everything you need to know about connecting to different backend options.

## ✅ What's Already Set Up

### Frontend Infrastructure
- **API Service** (`services/api.ts`) - Handles all HTTP requests with error handling
- **Custom Hooks** (`hooks/useApi.ts`) - React hooks for managing API state
- **TypeScript Types** (`types/api.ts`) - Type definitions for API responses
- **Demo Component** - Home screen shows working API integration example

### Key Features
- ✅ Automatic error handling
- ✅ Loading states
- ✅ TypeScript support
- ✅ Development/production URL switching
- ✅ Mutation hooks for creating/updating data

## 🚀 Backend Options

### Option 1: Use the Provided Express.js Example (Recommended for Testing)

**Quick Start:**
```bash
cd backend-example
npm install
npm run dev
```

**Features:**
- Ready-to-use REST API
- Posts and users endpoints
- CORS configured
- Error handling included

### Option 2: Supabase (Recommended for Production)

**Setup:**
```bash
npm install @supabase/supabase-js
```

Update `services/api.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

// Replace fetch calls with Supabase queries
export const getPosts = () => supabase.from('posts').select('*')
```

### Option 3: Firebase/Firestore

**Setup:**
```bash
npm install @react-native-firebase/app @react-native-firebase/firestore
```

### Option 4: AWS Amplify

**Setup:**
```bash
npm install aws-amplify @aws-amplify/react-native
```

### Option 5: Custom Backend (Node.js, Python, etc.)

Just update the `API_BASE_URL` in `services/api.ts` to point to your server.

## 📱 Testing Your Integration

1. **Start the provided backend example:**
   ```bash
   cd backend-example
   npm install
   npm run dev
   ```

2. **Run your React Native app:**
   ```bash
   npm start
   ```

3. **Test the connection:**
   - Open your app
   - Tap "Show API Example" 
   - Try creating a test post

## 🔧 Configuration

### Update API URL

Edit `services/api.ts`:
```typescript
const API_BASE_URL = __DEV__ 
  ? 'http://YOUR_LOCAL_IP:3000/api'  // For physical devices
  : 'https://your-production-backend.com/api';
```

### Add Authentication

Example with JWT tokens:
```typescript
// In api.ts
private async request<T>(endpoint: string, options: RequestInit = {}) {
  const token = await AsyncStorage.getItem('auth_token');
  
  return fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  });
}
```

## 📋 Common Use Cases

### Fetching Data
```typescript
// In your component
const { data: posts, loading, error } = useApi<Post[]>('/posts');

if (loading) return <ActivityIndicator />;
if (error) return <Text>Error: {error}</Text>;
if (posts) return <PostList posts={posts} />;
```

### Creating Data
```typescript
const { mutate: createPost, loading } = useApiMutation<Post>();

const handleSubmit = async () => {
  try {
    await createPost('/posts', { title, content });
    // Success - maybe navigate back or show success message
  } catch (error) {
    // Error handled automatically
  }
};
```

### User Authentication
```typescript
const { mutate: login } = useApiMutation<LoginResponse>();

const handleLogin = async () => {
  try {
    const result = await login('/auth/login', { email, password });
    await AsyncStorage.setItem('auth_token', result.token);
    // Navigate to authenticated screens
  } catch (error) {
    // Show error message
  }
};
```

## 🚨 Troubleshooting

### Connection Issues

1. **Can't connect to localhost:**
   - Use your computer's IP address instead of `localhost`
   - For iOS Simulator: `localhost` should work
   - For Android Emulator: use `10.0.2.2:3000`
   - For physical devices: use your computer's IP (e.g., `192.168.1.100:3000`)

2. **CORS errors:**
   - Ensure your backend has CORS configured
   - Check that the request headers are correct

3. **Network request failed:**
   - Verify the backend server is running
   - Check the URL in `services/api.ts`
   - Test the API with curl or Postman first

### Finding Your Computer's IP

**macOS/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**Windows:**
```bash
ipconfig | findstr "IPv4"
```

## 🔒 Production Considerations

### Security
- Use HTTPS in production
- Implement authentication (JWT/OAuth)
- Add rate limiting
- Validate all inputs
- Use environment variables for secrets

### Performance
- Implement caching
- Add request deduplication
- Use pagination for large datasets
- Optimize images and assets

### Monitoring
- Add error tracking (Sentry)
- Implement analytics
- Monitor API performance
- Set up health checks

## 📚 Next Steps

1. **Choose your backend** - Start with the provided Express example
2. **Test the integration** - Use the demo in your home screen
3. **Add authentication** - Implement user login/signup
4. **Build your features** - Replace demo with real app functionality
5. **Deploy** - Choose a hosting provider for your backend

## 🆘 Need Help?

- Check the `backend-example/README.md` for detailed backend setup
- Test endpoints with the health check: `http://localhost:3000/health`
- Use the React Native debugger to inspect network requests
- Check server logs for backend issues

Your app is now fully equipped to connect to any backend! The API service layer is flexible and can be adapted to work with any REST API or backend service. 