
text1 = "";
text2 = "";
count = 0;
count2 = 0;
text = msg[0].split("");

function writetext() {
    text1 = text2 + text[count];
    text2 += text[count];
    document.all["nothing"].innerHTML = text1;

    if (count < text.length - 1) {
        count++;
        setTimeout('writetext()', 0);
    } else {
        count = 0;
        if (count2 != 3) {
            count2++;
            text = eval('msg[' + count2 + '].split("")');
            setTimeout('writetext()', 0);
        } 
    }
}



pic1 = "";
pic2 = "";
counts = 0;
counts2 = 0;
pic = discord[0].split("");


function meme() {
    pic1 = pic2 + pic[counts];
    pic2 += pic[counts];
    document.all["dicord"].innerHTML = pic1;

    if (counts < pic.length - 1) {
        counts++;
        setTimeout('meme()', 0);
    } else {
        count = 0;
        if (counts2 != 1) {
            counts2++;
            text = eval('discord[' + counts2 + '].split("")');
            setTimeout('meme()', 0);
        } 

    }
}
