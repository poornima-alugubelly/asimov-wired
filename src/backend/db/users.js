import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		email: "adarshbalika@gmail.com",
		password: "adarshBalika123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		bio: "I am the first user",
		portfolio: "https://adarshbalika.netlify.app/",
	},
	{
		_id: uuid(),
		firstName: "Teju",
		lastName: "N",
		username: "Teju N",
		password: "TejuN123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Hari",
		lastName: "Priya",
		username: "Hari Priya",
		password: "HariPriya123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Appu",
		lastName: "S",
		username: "Hari S",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Appu",
		lastName: "S",
		username: "Hari S",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
