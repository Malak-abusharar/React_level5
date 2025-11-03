import React from "react";
import "./ProductDetails.css";
import { useGetoneProductQuery } from "../../Redux/productsApi";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
export default function ProductDetails() {
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

  if(data){
  return <div>data-id: {data.id}</div>;
  }
}
