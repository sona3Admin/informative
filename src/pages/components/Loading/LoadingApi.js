import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';

const useApi = (timeout) => {
  const loadingContext = useLoadingContext();
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = 'hidden';

    const timeoutId = setTimeout(() => {
      loadingContext.done();
      document.body.style.overflow = 'visible';

      setLoading(false)
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = 'visible';
    };
  }, [loadingContext, timeout, location.pathname]);

  return loading;
};

export default useApi;
