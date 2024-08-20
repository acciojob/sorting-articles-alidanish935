//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function util(val) {
	return val.replace(/(a |an |the)/i, "").trim();
}

bands.sort((a,b)=> util(a)>util(b)?1:-1);

const ul = document.getElementById("band");

bands.forEach((item)=>{
	const li = document.createElement("li");
	li.innerText = item
	ul.appendChild(li)
	
})

