import React from "react"
import ProductComponent from "../Product"
import { sortProducts } from "./filters"
import data from "../../../data/data.json"

export default class ProductsContainer extends React.PureComponent {  
  constructor(props) {
    super(props)
		this.state  = {
			products: [],
			filteredProducts: [],
			selectedValue: "featured",
			isClickedProduct: 0
		}
	}
	componentWillMount() {
    const { selectedValue } = this.state
    
			this.setState(() => {
				const filteredProducts = sortProducts(selectedValue, data)
				return {
					products: data,
					filteredProducts: filteredProducts,
					selectedValue: selectedValue
				}
			})
		
  }
	
  componentWillReceiveProps(nextProps) {
		console.log(nextProps)
    const { products } = this.state
    const { selectedValue, isClickedProduct } = nextProps
		console.log(isClickedProduct)
		if(!isClickedProduct){
			if (selectedValue) {
				const filteredProducts = sortProducts(selectedValue, products)
				this.setState({
					products: data,
					filteredProducts: filteredProducts,
					selectedValue: selectedValue
				})
			}
		} else {
			const filteredProducts = products.filter((el) => {
			return el.id == isClickedProduct })
				this.setState({
						products: data,
						filteredProducts: filteredProducts,
						isClickedProduct: isClickedProduct
					})
		}
  }
	
	

	render() {
    const { filteredProducts } = this.state
    const { handleClickProduct, isClickedProduct } = this.props
    return (
      <section className="products">
        {	
          filteredProducts.map(product => (
            <ProductComponent 
              {...product} 
              key={product.id}
							handleClickProduct={handleClickProduct}
						/>
          ))
        }
      </section>	
    )
  }
}