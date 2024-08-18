import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 679px)').matches);
      setShowSideMenu(window.matchMedia('(min-width: 1430px)').matches);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isSmallScreen, showSideMenu };
};

export default useScreenSize;
