import { Suspense } from "react";

const Loadable = ({ children, fallback = null }) => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default Loadable;
