import Address from "../database/models/address";
import User from "../database/models/user";

interface AddressData {
  user_id: number;
  houseno: string;
  streetno: number;
  area: string;
  landmark: string;
  city: string;
  country: string;
  zip_code: number;
  state: string;
  status: boolean;
  address_type: string;
}

export const createAddressForUser = async (
  user:any,
  addressData: AddressData
): Promise<any> => {
  try {
    const address = await Address.create(addressData);

    return address;
  } catch (error) {
    throw error;
  }
};
