// code your solution here


function superbowlWin(a) {
    let b = a.find(i => i.result == "W");
    return b==undefined ? b : b.year;
}