import React from 'react';


function Lazy({ page }) {
  const Component = React.useMemo(() => {
    return React.lazy(() => import(`../../pages/${page}`));
  }, [page]);
console.log("page",page)
  return (
    <React.Suspense>
      <Component />
    </React.Suspense>
  );
}

export default Lazy;
