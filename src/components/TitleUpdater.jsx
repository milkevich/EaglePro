import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/EaglePro/careers':
        document.title = 'EaglePro - Подай заявку сегодня!';
        break;
      case '/EaglePro/gourmet':
      case '/EaglePro/orders-admin':
        document.title = 'EaglePro - Еда в дорогу!';
        break;
      default:
        document.title = 'EaglePro';
    }
  }, [location.pathname]);

  return null;
};

export default TitleUpdater;
