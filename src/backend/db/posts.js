import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: "Testing post",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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

				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Apr 06 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content: "asata la vista",
		likes: {
			likeCount: 3,
			likedBy: [
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
					_id: uuid(),
					firstName: "Allen",
					lastName: "Smith",
					username: "allenhere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "SarahW",
		firstName: "Sarah",
		lastName: "Walkman",
		createdAt: new Date("Feb 23 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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

				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		createdAt: new Date("March 13 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			dislikedBy: [],
			likedBy: [
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
				{
					_id: uuid(),
					firstName: "Allen",
					lastName: "Smith",
					username: "allenhere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
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
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("May 03 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
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
			dislikedBy: [],
		},
		firstName: "Anna",
		lastName: "Baker",
		username: "annahere",
		createdAt: new Date("April 18 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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
			dislikedBy: [],
		},
		firstName: "Lizzie",
		lastName: "Anne",
		username: "itsLizzie",
		createdAt: new Date("Jan 01 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		createdAt: new Date("Dec 15 2020 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 6,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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

				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
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
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("April 27 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
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
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Allen",
		lastName: "Smith",
		username: "allenhere",
		createdAt: new Date("Feb 28 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
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
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("April 15 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
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
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Anna",
		lastName: "Baker",
		username: "annahere",
		createdAt: new Date("September 15 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
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
			dislikedBy: [],
		},
		firstName: "Sarah",
		lastName: "Walkman",
		username: "SarahW",
		createdAt: new Date("October 09 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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

				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Allen",
		lastName: "Smith",
		username: "allenhere",
		createdAt: new Date("November 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
				{
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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
			dislikedBy: [],
		},
		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		createdAt: new Date("Jan 19 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Lizzie",
		lastName: "Anne",
		username: "itsLizzie",
		createdAt: new Date("December 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
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

				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		createdAt: new Date("April 03 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Feb 05 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
			],

			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Feb 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},

		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		createdAt: new Date("May 11 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 4,
			likedBy: [
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
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Anna",
		lastName: "Baker",
		username: "annahere",
		createdAt: new Date("December 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
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
			dislikedBy: [],
		},
		firstName: "Sarah",
		lastName: "Walkman",
		username: "SarahW",
		createdAt: new Date("July 23 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
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
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Lizzie",
		lastName: "Anne",
		username: "itsLizzie",
		createdAt: new Date("November 02 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("July 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},

				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		createdAt: new Date("September 07 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 5,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
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
					_id: uuid(),
					firstName: "Allen",
					lastName: "Smith",
					username: "allenhere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Jane",
		lastName: "Doe",
		username: "janedoe",
		createdAt: new Date("March 04 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
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
			dislikedBy: [],
		},
		firstName: "Allen",
		lastName: "Smith",
		username: "allenhere",
		createdAt: new Date("December 17 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
				},
				{
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Anna",
		lastName: "Baker",
		username: "annahere",
		createdAt: new Date("March 27 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Anna",
					lastName: "Baker",
					username: "annahere",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "Lizzie",
		lastName: "Anne",
		username: "itsLizzie",
		createdAt: new Date("April 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Lizzie",
					lastName: "Anne",
					username: "itsLizzie",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
				},
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
			dislikedBy: [],
		},
		firstName: "Sarah",
		lastName: "Walkman",
		username: "SarahW",
		createdAt: new Date("November 14 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
				},
			],
			dislikedBy: [],
		},
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		createdAt: new Date("Jan 27 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Sarah",
					lastName: "Walkman",
					username: "SarahW",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					firstName: "Jane",
					lastName: "Doe",
					username: "janedoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
				},
				{
					firstName: "John",
					lastName: "Doe",
					username: "johndoe",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181890/socmedia/pic6_brdxis.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("December 12 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181891/socmedia/pic1_jwkxzf.jpg",
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: "Allen",
		lastName: "Smith",
		username: "allenhere",
		createdAt: new Date("March 09 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic7_rmi3s7.jpg",
	},
];
