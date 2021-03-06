import React from 'react';

// Route not found component
const NotFound = () => (
  <div className="not-found">
    <h3>{window.location.href}</h3>
    <p>This url does not match an existing route.  Please try again!</p>
  </div>
);

export default NotFound;