import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, Avatar, IconButton, Heading, Spacer } from "@chakra-ui/react";
import { FaUser, FaPlus, FaThumbsUp, FaComment } from "react-icons/fa";

const postsData = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE4MDEzNjUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    content: "Excited to announce the launch of my new startup!",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTgwMTM2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    content: "Looking for a co-founder with a tech background.",
    likes: 5,
    comments: 1,
  },
];

const Index = () => {
  const [posts, setPosts] = useState(postsData);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newPostData = {
      id: posts.length + 1,
      user: "New User",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzk1NDI3MHww&ixlib=rb-4.0.3&q=80&w=1080",
      content: newPost,
      likes: 0,
      comments: 0,
    };
    setPosts([newPostData, ...posts]);
    setNewPost("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Entrepreneur Network
        </Heading>
        <HStack width="100%" spacing={4}>
          <Avatar name="New User" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzk1NDI3MHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Input placeholder="Share something..." value={newPost} onChange={(e) => setNewPost(e.target.value)} />
          <Button onClick={handlePost} colorScheme="blue" leftIcon={<FaPlus />}>
            Post
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {posts.map((post) => (
            <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack spacing={4}>
                <Avatar name={post.user} src={post.avatar} />
                <VStack align="start">
                  <Text fontWeight="bold">{post.user}</Text>
                  <Text>{post.content}</Text>
                </VStack>
              </HStack>
              <HStack spacing={4} mt={4}>
                <IconButton aria-label="Like" icon={<FaThumbsUp />} />
                <Text>{post.likes}</Text>
                <IconButton aria-label="Comment" icon={<FaComment />} />
                <Text>{post.comments}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
