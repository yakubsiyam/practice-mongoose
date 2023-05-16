import { IUser } from "./user.interface";
import User from "./user.model";

// 4. DB Query
export const creaeUserToDB = async (payload: IUser): Promise<IUser> => {
  // Creating new user
  const user = await new User(payload); // User -> Class   user -> instance
  await user.save(); //built in instance methods

  console.log(user.fullName()); // custom instance methods
  return user;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 });
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

// class -> attach -> method -> directly call using class;
