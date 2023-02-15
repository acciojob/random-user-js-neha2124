//your code here
function dara() {
	fetch ("https://randomuser.me/api/")
	.then((response)=> (response.json))
	.then((data)=> console.log(data))
	
}

dara()