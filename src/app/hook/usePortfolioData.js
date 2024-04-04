'use client'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePortfolioData = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: user = []}= useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/api/v1/get/user/65b3a22c01d900e96c4219ae');
            return res.data
        }
    })

    return [user, refetch]
};

export default usePortfolioData;