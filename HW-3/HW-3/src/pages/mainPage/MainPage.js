import React from 'react'
import ProductsComp from '../../components/productsComp/ProductsComp'
import SearchComp from '../../components/searchComp/SearchComp'


function MainPage() {

    const productsInfo = [
        {
            name: "Apple",
            price: 100,
        },
        {
            name: "Banana",
            price: 150,
        },
        {
            name: "Orange",
            price: 200,
        },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(e.target)
    }

    const handleLike = (val) => {
        alert(`${val} added to favorites`);
    }

  return (
    <div>
        <SearchComp onSearch={handleSearch}/>
        <div>
            {productsInfo.map((item) => (
                <ProductsComp
                name={item.name}
                price={item.price}
                onLike={handleLike}
                />
                
            ))}
        </div>
    </div>
  )
}

export default MainPage