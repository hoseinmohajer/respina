const baseUrl = process.env.BASE_PATH;

export const login = (data) => {
	return {data: {email: data.email}}
};