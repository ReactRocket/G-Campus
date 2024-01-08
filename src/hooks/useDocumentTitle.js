import { useEffect } from 'react';

const useDocumentTitle = (title) => {

  useEffect(() => {
    document.title = window.location.pathname + " - " + title;
  }, [title]);
};

export default useDocumentTitle;
