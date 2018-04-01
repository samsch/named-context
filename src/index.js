import React from 'react';

export default (() => {
  const contexts = {};
  return name => {
    if (!contexts[name]) {
      contexts[name] = React.createContext();
    }
    return contexts[name];
  };
})();
