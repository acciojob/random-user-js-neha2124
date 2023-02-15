//your code here
const user = document.getElementById('user')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const age = document.getElementById('age')
const profileImg = document.getElementById("profile-img")
const profileName = document.getElementById("profile-name")


async function randomuser() {
const response = await fetch ("https://randomuser.me/api/")
const data = await response.json();
	const user = data.results[0]
	console.log(user)
	
}
// function display (user){
	// profileImg.innerHTML
// }


randomuser()