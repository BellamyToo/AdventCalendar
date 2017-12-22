var HTML = '<div class="article" onclick=""><div class="box closedDoor"><h2>@@@</h2></div><div class="present"><div class="bauble">%%%</div></div></div>';
var dateObj = new Date();
var monthNo = dateObj.getMonth();
var dayNo = dateObj.getDate();
var adventBoxesHTML = '';
var newHTML = '';
if(monthNo != 12) {
    dayNo = 26; // so that the rest of the year the doors are always open
}
for (day = 20; day < 26; day++) {
    if (day == 20) {
        newHTML = HTML.replace('%%%', '❄');
    } else if (day == 21) {
        newHTML = HTML.replace('%%%', '🍪');
    } else if (day == 22) {
        newHTML = HTML.replace('%%%', '🦌');
    } else if (day == 23) {
        newHTML = HTML.replace('%%%', '🎅');
    } else if (day == 24) {
        newHTML = HTML.replace('%%%', '🎁');
    } else if (day == 25) {
        newHTML = HTML.replace('%%%', '🎄');
    }
    newHTML = newHTML.replace('@@@', day);
    if(day <= dayNo) {
        newHTML = newHTML.replace('closedDoor','openDoor');
        newHTML = newHTML.link('boxes/' + day +'.html');
    }
    adventBoxesHTML += newHTML;
}
    document.getElementById("adventBoxes").innerHTML = adventBoxesHTML;
