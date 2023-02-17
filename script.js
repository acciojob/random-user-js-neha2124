//your code here
const user = document.getElementById('getUser')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const age = document.getElementById('age')
const profileImg = document.getElementById("profile-img")
const profileName = document.getElementById("profile-name")
const info = document.getElementById('additional-info')

async function randomuser() {
const response = await fetch ("https://randomuser.me/api/")
const data = await response.json();
	const user = data.results[0]
	return user
	
}

	console.log(randomuser())
function display (user){
	profileImg.setAttribute('src',`${user.picture.large}`)
      profileName.innerHTML = `${user.name.first} ${user.name.last}`
age.addEventListener('click',()=>{

		info.innerHTML = "";
		info.innerHTML = `${user.dob.age}`
	}
)
	email.addEventListener('click',()=>{
	
		info.innerHTML = ""
	
		info.innerHTML = `${user.email}`
	
})
	phone.addEventListener('click',()=>{
	
		info.innerHTML = ""
	
		info.innerHTML = `${user.phone}`
	})
	
}

function newUser (){
	info.innerHTML = "";
	randomuser();
}
					  
user.addEventListener('click',newUser)
	randomuser()				  
	

