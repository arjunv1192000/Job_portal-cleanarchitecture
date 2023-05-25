import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"

const expressConfig = (app) => {
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors())

  };
  
  export default expressConfig;