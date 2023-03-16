import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IUser } from '../interfaces';

const fetchUserTimeline = async (user:IUser,page:number) => {
  return await axios.get(`/posts/timeline/?userId=${user?._id}&page=${page}`);
};

export const useUserTimeline = (user:IUser,page:number) => {
  return useQuery(['user',user,page], () => fetchUserTimeline(user,page));
};
