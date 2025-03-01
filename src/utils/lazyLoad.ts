import React from "react";

export const lazyLoad = (path: string, namedExport: string) => {
  return React.lazy(async () => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      const module = await promise;
      return ({ default: module[namedExport] });
    }
  });
};
