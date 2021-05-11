
/* RANDOM WORDS GENERATOR*/  

// the number of words
var NumberOfWords = 25

var words = new BuildArray(NumberOfWords)

// the random words:
words[1] = "Solid State Disk (SSD): Katı Durum Diski"
words[2] = "Random Access Memory (RAM): Rastgele Erişimli Bellek"
words[3] = "Revolution Per Minute (RPM): Dakikadaki Devir Sayısı"
words[4] = "Double Data Rate (DDR): Türkçe karşılığı Çift Veri Değeri/Oranı"
words[5] = "Administrative Domain (AD): Yönetsel Alan Adı"
words[6] = "File Transfer Protocol (FTP): Dosya Aktarma Protokolü "
words[7] = "Communication Link: İletişim Hattı"
words[8] = "Power Supply: Güç Kaynağı "
words[9] = "Display Adapter (DA): Görüntü adaptörü"
words[10] = "Encapsulated PostScript(EPS): Sınırlandırılmış PostScript "
words[11] = "Wide Area Information Servers (WAIS):Geniş Alan Bilgi Sistemi"
words[12] = "Very High Frequency (VHF ): Çok Yüksek Frekans"
words[13] = "TCP/IP Protocol Suite: TCP/IP Protokol Ailesi"
words[14] = "Post Office Protocol (POP): Posta Ofisi Protokolü"
words[15] = "Point-to-Point Protocol (PPP): Noktalar Arası Protokol"
words[16] = "Packet Internet Groper (PING): Internet Paketi Araştırıcısı  "
words[17] = "Internet Relay Chat (IRC): Internet Bağlantılı Sohbet "
words[18] = "Liquid Crystal Display (LCD): Sıvı Kristal Ekran"
words[19] = "Graphical User Interface (GUI): Grafik Kullanıcı Arabirimi"
words[20] = "Floating Point Unit (FPU):Kayan Nokta Ünitesi"
words[21] = "Access Point (AP): Erişim Noktası "
words[22] = "High Resolution (HR ): Yüksek Çözümlü Bant"
words[23] = "Microprocessor Development System (MDS):Mikro İşlem Birimi"
words[24] = "Read Only Memory (ROM): Sadece Okunabilir Bellek"
words[25] = "Central Processing Unit (CPU): Merkezi İşlem Birimi"

function BuildArray(size){

this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this

}

// when click
function PickRandomWord(frm) {

// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


/*****************
* MAKE A WORD LİST
* ***************/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("item-list");
var dlt = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

// create word list
function createListElement() {
	var li = document.createElement("li");
	var dlt = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	dlt.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li).appendChild(dlt).classList.add("delete");
	
	input.value = "";
	deleteListItem();
}

// add function
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.childNodes.forEach(function(e) {
	e.addEventListener("click", function() {
		e.classList.toggle("done");
	})
})

//delete function
function deleteListItem(){
	for (var i = 0; i < dlt.length; i++) {
			(function(i){
				dlt[i].addEventListener("click", function(){
					this.parentNode.remove();
				}
				);
						}
			)(i);
	}
}
deleteListItem();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
