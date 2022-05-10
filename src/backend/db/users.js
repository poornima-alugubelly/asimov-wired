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
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am the first user",
		portfolio: "https://adarshbalika.netlify.app/",
	},
	{
		_id: uuid(),
		firstName: "Teju",
		lastName: "N",
		username: "TejuN",
		password: "TejuN123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "teju@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am the second user",
		portfolio: "https://www.google.co.in/",
	},
	{
		_id: uuid(),
		firstName: "SanjanaT",
		lastName: "T",
		username: "SanjanaT",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "sanju@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am third user",
		portfolio: "https://www.google.co.in/",
	},
	{
		_id: uuid(),
		firstName: "Hari",
		lastName: "Priya",
		username: "HariPriya",
		password: "HariPriya123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Hari@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am fourth user",
		portfolio: "https://www.google.co.in/",
	},
	{
		_id: uuid(),
		firstName: "Appu",
		lastName: "S",
		username: "AppuS",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Appu@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am fifth user",
		portfolio: "https://www.google.co.in/",
	},
	{
		_id: uuid(),
		firstName: "Manoj",
		lastName: "G",
		username: "ManojG",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Manoj@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am sixth user",
		portfolio: "https://www.google.co.in/",
	},
	{
		_id: uuid(),
		firstName: "Prashanth",
		lastName: "B",
		username: "PrashanthB",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Prashanth@gmail.com",
		followers: [],
		following: [],
		bookmarks: [],
		bio: "I am seventh user",
		portfolio: "https://www.google.co.in/",
	},
];
