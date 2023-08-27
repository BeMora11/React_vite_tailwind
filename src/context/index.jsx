import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const [ischeckoutSideMenuOpen, setIscheckoutSideMenuOpen] = useState(false);
  const opencheckoutSideMenu = () => setIscheckoutSideMenuOpen(true);
  const closecheckoutSideMenu = () => setIscheckoutSideMenuOpen(false);

  const [order, setOrder] = useState([]);

  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => setProducts(response));
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products.filter((item) => String(item.title).toLowerCase().includes(String(searchByTitle).toLowerCase()));
  }

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products.filter((item) => {
      if (String(item.category).toLowerCase().includes(String(searchByCategory).toLowerCase())) {
        return item;
      }

      if (searchByCategory == 'mens_clothing' && item.category == "men's clothing") {
        return item;
      }

      if (searchByCategory == 'womens_clothing' && item.category == "women's clothing") {
        return item;
      }
    });
  }

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    console.log(searchType);
    if (searchType === 'BY_TITLE') {
      return filteredProductsByTitle(products, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory).filter((item) => String(item.title).toLowerCase().includes(String(searchByTitle).toLowerCase()));
    }
    if (!searchType) {
      return products;
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory));
    if (searchByCategory && !searchByTitle) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory));
    if (!searchByCategory && !searchByTitle) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory));
    console.log(searchByTitle);
    console.log(searchByCategory);
  }, [products, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      ischeckoutSideMenuOpen,
      opencheckoutSideMenu,
      closecheckoutSideMenu,
      order,
      setOrder,
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      filteredProducts,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}