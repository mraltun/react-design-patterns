import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map((children, child) => {
        // If the child is valid React element
        if (React.isValidElement(child)) {
          // Pass the "user" state as prop
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
};
