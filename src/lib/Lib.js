export function getFilteredArray(arr, prop) {
  return arr && arr.filter((item) => item.name === prop);
}

export function getTotals(arr, prop) {
  if (prop === undefined) {
    return arr.reduce((acc, cur) => acc + cur.price);
  } else {
    return getFilteredArray(arr,prop).reduce((sum, num) => sum + num.price, 0)
    ;
  }
}

export function DeleteIt(){
  const copy =cart && [...cart]
  const filteredCart = copy
    .filter((item) => {
      return item.name !== name})
      console.log(filteredCart);
      setCart(filteredCart);
      if(filteredCart.length === 0){
        localStorage.removeItem("cart")
        localStorage.removeItem("cartCopy")
      }
}

export function HundleCart(){
  `KSh. ${
            cartCopy &&
            cartCopy.reduce((sum, item) => sum + item.price, 0).toLocaleString()
          }`
}