import React from "react"
import FilterComponent from "./Filter"
import ProductsContainer from "./Products"
import { sortProducts } from "./Products/filters"
import data from "../../data/data.json"
import "./index.scss"

export default class JacketContainer extends React.PureComponent {
  

  constructor(props) {
    super(props)
		this.state  = {
			products: data,
			filteredProducts: [],
			selectedValue: "featured",
			isClickedProduct: 0
		}
  }

	handleChangeSort = (event) => { 
		const { products } = this.state
		const selectedValue = event.target.options[event.target.selectedIndex].value
		const filteredProducts = sortProducts(selectedValue, products)
		this.setState({
        filteredProducts: filteredProducts,
        selectedValue: selectedValue
		})
		
	}
	handleClickProduct = (event) => { 
		const { products } = this.state
		
		const isClickedProduct = event.currentTarget["id"]
		const filteredProducts = products.filter((el) => {
			return el.id == event.currentTarget["id"]
		})
		console.log(filteredProducts, "-----click")
		console.log(isClickedProduct)
		this.setState({
			filteredProducts: filteredProducts,
			isClickedProduct: isClickedProduct
     })
		
	}
  

  render() {
		const { selectedValue, filteredProducts, isClickedProduct } = this.state
		console.log(filteredProducts, "-----state")
    return (
			<div>
				<FilterComponent 
					handleChangeSort={this.handleChangeSort}
				/>
				<ProductsContainer
					filteredProducts={filteredProducts}
					selectedValue={selectedValue}
					handleClickProduct={this.handleClickProduct}
					isClickedProduct={isClickedProduct}
				/>
			</div>
			
		)
    
  }
}