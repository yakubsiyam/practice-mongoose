import { NextFunction, Request, Response } from "express";
import {
  creaeUserToDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await creaeUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// Pattern

/*

    Route -> Controller -> service

*/
