var blogposts = ['rap', 'sample1', 'sample2'];

var blogpage = `
<div class='blogpage'>
`
var index;
for (index = 0; index < blogposts.length; ++index) {
  var id = 'bp'.concat(blogposts[index]);
  var content = eval(id);
  var btnandpost = "<button class='blogpost' id=${id}> ${blogposts[index]} </button>".concat(
    '<div>${content}</div>'
  );
  blogpage = blogpage.concat(btnandpost);
}

blogpage = blogpage.concat(`
</div>
`);

document.getElementsByClassName('maincontent')[0].innerHTML = blogpage
