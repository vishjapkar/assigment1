import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
     
      const response = await axios.get(
        "http://localhost:1600/api/ProductTransaction"
      );
      setData(response.data);
     
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
      <table>
        <thead>
          <tr>
          
            <th>ID</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>sold</th>
            <th>dateOfSale</th>
          </tr>
        </thead>
        <tbody>
         
            {data.map((item) => (
  <tr key={item._id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>{item.description}</td>
    <td>{item.category}</td>
    <td><img src={item.image} alt="Image" height={60} /></td>
    <td>{item.sold}</td>
    <td>{item.dateOfSale}</td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};




export default Home