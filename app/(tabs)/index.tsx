import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Platform, StyleSheet, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useApi, useApiMutation } from "@/hooks/useApi";
import { CreatePostRequest, Post } from "@/types/api";

export default function HomeScreen() {
  const [showExample, setShowExample] = useState(false);
  const router = useRouter();

  // Example: Fetch posts from backend
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useApi<Post[]>("/posts", showExample);

  // Example: Create a new post
  const { mutate: createPost, loading: creating } = useApiMutation<
    Post,
    CreatePostRequest
  >();

  const handleCreatePost = async () => {
    try {
      await createPost("/posts", {
        title: "Test Post",
        content: "This is a test post created from the mobile app!",
      });
      // Refresh the posts list after creating
      refetch();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  const handleGetStarted = () => {
    router.push("/goals");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Malayalam Learning!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Start Your Learning Journey</ThemedText>
        <ThemedText>
          Ready to master Malayalam? Let's begin by understanding your goals and creating a personalized learning experience for you.
        </ThemedText>

        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <ThemedText style={styles.getStartedButtonText}>
            Get Started
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Backend Integration Demo</ThemedText>
        <ThemedText>
          Your app is now ready to connect to a backend! The API service is
          configured and ready to use.
        </ThemedText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowExample(!showExample)}
        >
          <ThemedText style={styles.buttonText}>
            {showExample ? "Hide" : "Show"} API Example
          </ThemedText>
        </TouchableOpacity>

        {showExample && (
          <ThemedView style={styles.apiExample}>
            <ThemedText type="subtitle">Posts from Backend:</ThemedText>

            {loading && <ActivityIndicator size="small" />}

            {error && (
              <ThemedText style={styles.errorText}>Error: {error}</ThemedText>
            )}

            {posts && (
              <ThemedView>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <ThemedView key={post.id} style={styles.postItem}>
                      <ThemedText type="defaultSemiBold">
                        {post.title}
                      </ThemedText>
                      <ThemedText>{post.content}</ThemedText>
                    </ThemedView>
                  ))
                ) : (
                  <ThemedText>No posts found. Create one below!</ThemedText>
                )}
              </ThemedView>
            )}

            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={handleCreatePost}
              disabled={creating}
            >
              <ThemedText style={styles.buttonText}>
                {creating ? "Creating..." : "Create Test Post"}
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Next Steps</ThemedText>
        <ThemedText>
          1. Set up a backend server (see backend examples below){"\n"}
          2. Update the API_BASE_URL in services/api.ts{"\n"}
          3. Start making API calls using the useApi hook
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  getStartedButton: {
    backgroundColor: "#0F4C4C",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(15, 76, 76, 0.3)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  getStartedButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  apiExample: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
  },
  errorText: {
    color: "#FF3B30",
    marginVertical: 8,
  },
  postItem: {
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 6,
    marginVertical: 4,
  },
});
