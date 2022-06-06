import React from "react";
import classes from "./Food.module.css";
import { useBusinessSearch } from "../../hooks/yelp-api/useBusinessSearch";

const Food = (props) => {
  useBusinessSearch();
  return <div> HELLO </div>;
};

export default Food;
