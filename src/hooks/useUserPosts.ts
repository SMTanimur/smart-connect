import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUserPosts = async (userId: string) => {
  return await axios.get(`/posts/all/${userId}`);
};

export const useUserPosts = (userId: string) => {
  return useQuery(['user', userId], () => fetchUserPosts(userId));
};
