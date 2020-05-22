function showpage(name) {
    if (name == 'blog') {
	console.log("hey");
	document.getElementsByClassName('maincontent')[0].innerHTML=`
<br>
<li><a href=\"booklist.html\">Read List</a></li>
`;
    }
    else if (name == 'schedule') {
	document.getElementsByClassName('maincontent')[0].innerHTML='<iframe src="https://calendar.google.com/calendar/embed?src=ualberta.ca_79j51oukmvuf46u8gssppu3er4%40group.calendar.google.com&ctz=America%2FEdmonton" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
    }
}
