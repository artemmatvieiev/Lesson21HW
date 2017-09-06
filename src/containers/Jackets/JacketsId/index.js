import React from "react"
import ProductContainer from "../Product"
import data from "../../../data/data.json"

export default class JacketsIdComponent extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state={
			filteredProducts: []
		}
	}
	
	render() {
		const {filteredProducts} = this.state
		return (
			<div>
				{	
          filteredProducts.map(product => (
            <ProductComponent 
              {...product} 
              key={product.id}
							
            />
          ))
        }
			</div>	
		

		)
	}
}