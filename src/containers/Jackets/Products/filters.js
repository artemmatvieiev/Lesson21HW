
export const sortProducts = (selectedValue, products) => {
	const filteredProducts = products
	const asc = function(products, value) {
		 const filteredProducts = products.sort((function(index) {
				return function(a, b){
					return (a[value] === b[value] ? 0 : (a[value] < b[value] ? -1 :1))
				}
			})(0))
			return filteredProducts
	}
	const desc = function(products, value) {
		 const filteredProducts = products.sort((function(index) {
				return function(a, b){
					return (a[value] === b[value] ? 0 : (a[value] > b[value] ? -1 :1))
				}
			})(0))
			return filteredProducts
	}
  switch (selectedValue) {
    case "featured": {
      asc(products, "id")
			return filteredProducts
    }
    case "az": {
      asc(products, "title")
			return filteredProducts
    }
    case "za": {
      desc(products, "title")
			return filteredProducts
    }
    case "asc": {
			asc(products, "price")
      return filteredProducts
    }
    case "desc": {
      desc(products, "price")
      return filteredProducts
    }
    case "datenew": {
      desc(products, "date")
      return filteredProducts
    }
    case "dateold": {
      asc(products, "date")
      return filteredProducts
    }
  }
}