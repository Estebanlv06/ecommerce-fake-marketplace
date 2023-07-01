import React from 'react'
import FeaturedCard from './FeaturedCard'

function Featured({ featuredProducts }) {
    return (
        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'  }}>
            {featuredProducts.length > 0 ? (
                featuredProducts.map(product => (
                        <FeaturedCard key={product.id} product={product} />
                    ))
                    ) : (
                    "Loading..."
            )}
        </section>
    )
}

export default Featured