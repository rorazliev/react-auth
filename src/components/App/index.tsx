import React, { ReactElement, useEffect } from 'react';
import ignoreRejection from '../../helpers/ignoreRejection';

const App: React.FC = (): ReactElement => {
  // Handle unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejection);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejection);
    };
  });

  return <div />;
};

export default App;
