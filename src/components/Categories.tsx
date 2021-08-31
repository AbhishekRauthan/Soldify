import React, { useEffect } from 'react'

const Categories = () => {
  const categories = new Set<string>();
  useEffect(() => {
    // console.log("products",products);
    // products.forEach(prod => {
    //   categories.add(prod.category)
    // })
  }, []);
  return (
    <div>
      {categories}
    </div>
  )
}

export default Categories
