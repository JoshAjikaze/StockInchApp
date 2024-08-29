// import { useState, useEffect } from 'react';
import { To, useNavigate } from 'react-router-dom';

export const useLogout = (redirectPath: To) => {
  const navigate = useNavigate();

  const handleTokenRemoval = () => {
    localStorage.removeItem("token");
    navigate(redirectPath);
    location.reload()
  };

  return handleTokenRemoval;
};

