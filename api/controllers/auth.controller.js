import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid credential !"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc; //this destructering is to sen the uer data without the encrypted password
    res
      .cookie("access_token", token, {
        //this is the way how to define a session
        httpOnly: true,
      })
      .status(200)
      .json(rest);
    /* res.cookie("access_token", token, {// this is the way how to define a normal cookie
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })  .status(200)
      .json(validUser);; */
    //httponly means third party apps can use this cookie
    //res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
