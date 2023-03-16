import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFriends = async (userId: string) => {
  return await axios.get('/users/' + userId);
};

export const useGetUser = (userId: string) => {
  return useQuery(['user', userId], () => fetchFriends(userId));
};
