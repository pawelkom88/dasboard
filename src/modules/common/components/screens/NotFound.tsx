import React from "react";
import { Navigate } from "react-router-dom";

export default function NotFound() {
  const [redirect, setRedirect] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(5);

  React.useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => setRedirect(false);
  });

  React.useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => setRedirect(false);
  }, [counter]);

  const navigateToHomepage = (
    <p className="mt-4 text-gray-500">You will be redirected in {counter} seconds.</p>
  );

  if (redirect === true) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="grid h-full px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        {navigateToHomepage}
      </div>
    </div>
  );
}
