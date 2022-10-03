import { Request, Response } from "express";
import { User } from "../Models/Users";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// upload image
const uploadProductImage = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Image uploaded",
      data: req.files,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const userRouter = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadProductImage,
};
