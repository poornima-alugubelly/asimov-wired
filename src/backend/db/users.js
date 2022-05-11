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
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
		following: [
			{
				_id: uuid(),
				firstName: "Sarah",
				lastName: "Walkman",
				username: "SarahW",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
			},
			{
				_id: uuid(),
				firstName: "Lizzie",
				lastName: "Anne",
				username: "itsLizzie",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
			},
			{
				firstName: "Anna",
				lastName: "Baker",
				username: "annahere",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
			},
		],
		followers: [
			{
				_id: uuid(),
				firstName: "Sarah",
				lastName: "Walkman",
				username: "SarahW",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
			},

			{
				_id: uuid(),
				firstName: "Lizzie",
				lastName: "Anne",
				username: "itsLizzie",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
			},
		],
		bookmarks: [],
		bio: "I am the first user",
		portfolio: "https://adarshbalika.netlify.app/",
	},
	/*****************************************2*******************************************/
	{
		_id: uuid(),
		firstName: "Sarah",
		lastName: "Walkman",
		username: "SarahW",
		password: "TejuN123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "teju@gmail.com",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
			},
		],
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
			{
				firstName: "John",
				lastName: "Doe",
				username: "johndoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
			},
		],
		bookmarks: [],
		bio: "I am the second user",
		portfolio: "https://www.google.co.in/",
	},
	/*******************************3*********************************/
	{
		_id: uuid(),
		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "sanju@gmail.com",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
			{
				_id: uuid(),
				firstName: "Lizzie",
				lastName: "Anne",
				username: "itsLizzie",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
			},
		],
		following: [
			{
				_id: uuid(),
				firstName: "Sarah",
				lastName: "Walkman",
				username: "SarahW",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
			},
			{
				_id: uuid(),
				firstName: "Allen",
				lastName: "Smith",
				username: "allenhere",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
			},
		],
		bookmarks: [],
		bio: "I am third user",
		portfolio: "https://www.google.co.in/",
	},
	/**********************************************4*************************************************/
	{
		_id: uuid(),
		firstName: "Lizzie",
		lastName: "Anne",
		username: "itsLizzie",
		password: "HariPriya123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
		email: "Hari@gmail.com",
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
			{
				firstName: "Anna",
				lastName: "Baker",
				username: "annahere",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
			{
				firstName: "Anna",
				lastName: "Baker",
				username: "annahere",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
			},
		],
		bookmarks: [],
		bio: "I am fourth user",
		portfolio: "https://www.google.co.in/",
	},
	/**************************************************5**************************************************/
	{
		_id: uuid(),
		firstName: "Anna",
		lastName: "Baker",
		username: "annahere",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
		email: "Appu@gmail.com",
		following: [
			{
				_id: uuid(),
				firstName: "Lizzie",
				lastName: "Anne",
				username: "itsLizzie",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
			},
		],
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
			},
		],
		bookmarks: [],
		bio: "I am fifth user",
		portfolio: "https://www.google.co.in/",
	},
	/*******************************************6*******************************************/
	{
		_id: uuid(),
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
		email: "Manoj@gmail.com",
		followers: [
			{
				_id: uuid(),
				firstName: "Sarah",
				lastName: "Walkman",
				username: "SarahW",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
			},
		],
		following: [
			{
				_id: uuid(),
				firstName: "Sarah",
				lastName: "Walkman",
				username: "SarahW",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
			},
		],
		bookmarks: [],
		bio: "I am sixth user",
		portfolio: "https://www.google.co.in/",
	},
	/*********************************************7*****************************************/
	{
		_id: uuid(),
		firstName: "Allen",
		lastName: "Smith",
		username: "allenhere",
		password: "AppuS123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Prashanth@gmail.com",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
		followers: [
			{
				firstName: "Jane",
				lastName: "Doe",
				username: "janedoe",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
			},
		],
		following: [],
		bookmarks: [],
		bio: "I am seventh user",
		portfolio: "https://www.google.co.in/",
	},
];
