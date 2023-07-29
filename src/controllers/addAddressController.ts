import { Request, Response } from "express";
import User from "../database/models/user";
import Address from "../database/models/address";
import { createAddressForUser } from "../services/addAddressService";

export const addAddressForUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const {
    houseno,
    streetno,
    area,
    landmark,
    city,
    country,
    zip_code,
    state,
    status,
    address_type,
  } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const addressData = {
      user_id: user.id,
      houseno,
      streetno,
      area,
      landmark,
      city,
      country,
      zip_code,
      state,
      status,
      address_type,
    };

    const address = await createAddressForUser(user, addressData);
    console.log(address);
    return res.status(201).json(address);
  } catch (error) {
    console.error("Error adding address for user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
