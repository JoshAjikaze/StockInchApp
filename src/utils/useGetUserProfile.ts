import { useState, useEffect } from 'react';
import { useGetUserProfileQuery } from '../features/api';

export const useGetUserProfile = () => {

  const { data: userProfile, isLoading, error } = useGetUserProfileQuery("");
  const [isDataStored, setIsDataStored] = useState(false);

  useEffect(() => {
    if (userProfile && !isDataStored) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      setIsDataStored(true);
    }
  }, [userProfile, isDataStored]);

  return { userProfile, isLoading, error };
};
