import React, { useRef } from "react";
import "./ProductDetails.css";
import { useGetoneProductQuery } from "../../Redux/productsApi";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import DetailsThumb from "./DetailsThumb";
export default function ProductDetails() {
  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setindex(index)
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  let { id } = useParams();
  const parsedId = Number(id);

  const { data, error, isLoading } = useGetoneProductQuery(parsedId);

  console.log("param id =", id, "parsedId =", parsedId);
  console.log("data =", data);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          Error
        </Typography>
      </Box>
    );
  // if (!data) return null;

  if (data) {
    return (
      <div className="app details-page">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
