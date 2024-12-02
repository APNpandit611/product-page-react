import { useEffect, useState } from "react";
import ProductCard, { BestSellerCard } from "./component/ProductCard";
import Categories from "./component/Categories";
import CategoryItem from "./component/CategoryItem";
import { useSelector } from "react-redux";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const [ecom, setEcom] = useState([]);
  const [filterEcom, setFilterEcom] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const items = ["T-shirt", "Pant", "Hoodies", "Sweat-shirt", "sneakers"];
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await rawData.json();
      setEcom(data);
      setFilterEcom(data);
    };
    fetchData();
  }, []);

  const filterData = () => {
    const filteredData = filterEcom.filter((product) => product.price <= 20);
    setFilterEcom(filteredData);
  };

  useEffect(() => {
    const searchedItem = ecom.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterEcom(searchedItem);
  }, [ecom, search]);

  const HOF = BestSellerCard(ProductCard);

  const cartItems = useSelector((store) => store.cart.cartItems);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;

      // Fetch the user info using the access token
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userInfo = await response.json();
      console.log("User Info:", userInfo);
      setIsloggedIn(true); // Logs the user's profile information
    },
    scope: "openid profile email", // Ensures you get access to profile and email information
  });

  const logout = () => {
    googleLogout();
    setIsloggedIn(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-10 py-4 text-white shadow-lg rounded-md">
        <h1 className="text-2xl font-bold tracking-wide text-indigo-500">
          LOGO
        </h1>
        <button
          onClick={filterData}
          className="border border-indigo-500 px-4 py-2 font-semibold rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          Cheap First
        </button>
        <button className="border broder-gray-600 rounded-md p-2 text-black">
          Count - {cartItems.length}
        </button>
        {isLoggedIn ? (
          <button onClick={logout} className="text-black">Log out</button>
        ) : (
          <button onClick={() => login()} className="text-black">
            Log in
          </button>
        )}
      </div>

      <div className="flex gap-8">
        <div className="my-5">
          {items.map((item, index) => (
            <Categories
              key={index}
              title={item}
              open={index === open}
              setOpen={() =>
                setOpen((prevOpen) => (prevOpen === index ? null : index))
              }
            />
          ))}
        </div>
        <div className="">
          <div className="flex items-center space-x-2 p-4">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search your favorite..."
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-r-md transition duration-300 ease-in-out">
              Search
            </button>
          </div>

          <div className="m-5 flex flex-wrap gap-4">
            {filterEcom
              .slice(0, 10)
              .map((product) =>
                product.price >= 55 ? (
                  <HOF products={product} />
                ) : (
                  <ProductCard key={product.id} products={product} />
                )
              )}
          </div>
          <div>
            <h2>Cart Items:</h2>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
