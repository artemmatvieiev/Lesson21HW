import React from "react"
import { Link } from "react-router"

export default props => {
	const { id, title, price, date, handleClickProduct, isClickedProduct} = props
  return (
    <div className="product-card" id={id}  onClick={handleClickProduct} >
			<Link to={`jackets/${id}`}  >
				<div className="product-image" >
					<span>
						{`id: ${id}`}
					</span>
					<span className="date">
						{ new Date(date).toLocaleDateString('en-GB', {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit"
								})}
					</span>
					<img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
				</div>
				<div className="product-info">

						<h5>{title}</h5>

					<h6>{`$ ${price}`}</h6>
				</div>
			</Link>
		</div>
		
  )
}