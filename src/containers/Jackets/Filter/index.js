import React from "react"
import { Link } from "react-router"


export default (props) => {
	const { isSelected, handleChangeSort } = props
  return (
    <nav className="product-filter">
			
				<h1><Link to="/jackets">Jackets</Link></h1>
			
			<div className="sort">
				
				<div className="collection-sort">
					<label>Sort by:</label>
					<select onChange={handleChangeSort}>
						<option value="featured">Featured</option>
						<option value="az" >Alphabetically, A-Z</option>
						<option value="za" >Alphabetically, Z-A</option>
						<option value="asc" >Price, low to high</option>
						<option value="desc" >Price, high to low</option>
						<option value="datenew" >Date, new to old</option>
						<option value="dateold" >Date, old to new</option>
					</select>
				</div>
			</div>
		</nav>
  )
}