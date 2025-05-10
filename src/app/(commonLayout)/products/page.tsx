

// import ProductCard from '@/components/ProductCard';
// import React from 'react';

// const Page = () => {
//   return (
//     <div className=''>
//       <ProductCard />
//     </div>
//   );
// };

// export default Page;

import React, { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';

const Page = () => {
  return (
    <div className="">
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductCard />
      </Suspense>
    </div>
  );
};

export default Page;
