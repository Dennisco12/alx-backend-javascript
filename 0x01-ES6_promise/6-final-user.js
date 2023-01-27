import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup (firstName, lastName, fileName) {
	return Promise.allSettled([signUpUser, uploadPhoto]).
		then(function([signUpResponse, uploadResponse]) {
			var allResponse = []
			signup = {
				status: signUpResponse.status,
				value: signUpResponse.status === 'fulfilled' ? 
