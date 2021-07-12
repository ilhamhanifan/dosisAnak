function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getYoung(){
	var umurAnak 		= parseInt(document.getElementById("umurAnak").value);
	var dosisDewasa 	= parseInt(document.getElementById("dosisDewasaY").value);
	var res = ((umurAnak/(umurAnak+12))*dosisDewasa).toFixed(1);
	document.getElementById("young").innerHTML ="Hasil : " + res + " mg";
}

function getAusberger(){
	var umurM 		= parseInt(document.getElementById("umurBulan").value);
	var umurT 		= parseInt(document.getElementById("umurTahun").value);
	var dosisDewasa = parseInt(parseInt(document.getElementById("dosisDewasaA").value));
	var res;
	if (document.getElementById("r1").checked) {
		res =  (umurM+13)/100 * dosisDewasa;
	}else if (document.getElementById("r2").checked) {
		res = ((4*umurT)+20)/100 * dosisDewasa;
	}else{
		res = ((5*umurT)+10)/100 * dosisDewasa;
	}
	document.getElementById("ausberger").innerHTML ="Hasil : " + res.toFixed(2) + " mg";

	console.log(umurM);
	console.log(umurT);
	console.log(dosisDewasa);

}

function getClark(){
	var beratBadan  = parseInt(document.getElementById("beratBadan").value);
	var dosisDewasa = parseInt(document.getElementById("dosisDewasaC").value);
	document.getElementById("clark").innerHTML ="Hasil : " + ( (beratBadan/68)*dosisDewasa ).toFixed(2) + " mg";



}

function getBSA(){
	var tinggiBadan  = parseInt(document.getElementById("tinggiBadan").value);
	var beratBadan  = parseInt(document.getElementById("beratBadanB").value);
	var dosisDewasa = parseInt(document.getElementById("dosisDewasaB").value);
	var bsa = Math.sqrt(tinggiBadan*beratBadan/3600);
	var res = (bsa/1.73*dosisDewasa);
	document.getElementById("bsa").innerHTML ="BSA : " + ( bsa ).toFixed(2) + " mg (mosteller)";
	document.getElementById("dosisbsa").innerHTML ="Hasil : " + ( res ).toFixed(2) + " mg (mosteller)";


}












function kalkulasiDosis() {
	var x = document.getElementById("dyd").value;
	var y = document.getElementById("dyt").value;
	var z = document.getElementById("sya").value;
	var res =  x/y*z;
	document.getElementById("dosis").innerHTML ="Hasil : " + res + "";
}

function kalkulasiBMIdanBSA(){
	var x = document.getElementById("beratBadan").value;
	var y = document.getElementById("tinggiBadan").value;
	var res =  (x/((y/100)*(y/100))).toFixed(1);
	if (res < 18.5) {
		res = res + "  <b>Kurang Berat Badan</b>";
	} else if (res > 18.5 && res <= 23) {
		res = res + "  <b>Berat Badan Normal/Ideal</b>";
	} else if (res > 23 && res <= 25) {
		res = res + "  <b>Obesitas Tingkat 1</b>";
	} else if (res > 25 && res <= 30) {
		res = res + "  <b>Obesitas Tingkat 2</b>";
	} else if (res > 30) {
		res = res + "  <b>Obesitas Tingkat 3</b>";
	} else {
		res = "invalid input";
	}
	
	document.getElementById("bmi").innerHTML ="Hasil BMI : " + res ;


	var res = (Math.sqrt((y*x)/3600)).toFixed(2);
	document.getElementById("bsa").innerHTML ="Hasil BSA : " + res + "m<sup>2</sup> (Rumus Mosteller)";


}