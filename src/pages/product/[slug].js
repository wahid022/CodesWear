import { useRouter } from 'next/router'
import React from 'react'

const SlugPage = () => {

  const router=useRouter();
  console.log(router.query);
  const {slug}=router.query;
  return (
    <div>
      My Slug {slug}
    </div>
  )
}

export default SlugPage


