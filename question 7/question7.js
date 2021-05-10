str = "console.log(strip_tags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));"
var pos = str.search("SkillSanta Assignments");

var res = str.substring(pos,61);
console.log(res);