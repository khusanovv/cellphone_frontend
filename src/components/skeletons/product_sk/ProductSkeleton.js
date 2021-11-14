import React from "react";
import ContentLoader from "react-content-loader";

function ProductSkeleton() {
  return (
    <ContentLoader
      speed={0.8}
      width={330}
      height={520}
      viewBox="0 0 330 520"
      backgroundColor="#D5D3D6"
      foregroundColor="#E1DFE2"
    >
      <rect x="10" y="10" ry="30" width="320" height="500" />
    </ContentLoader>
  );
}

export default ProductSkeleton;
