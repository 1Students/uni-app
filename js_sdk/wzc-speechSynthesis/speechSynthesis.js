
function changeEnCode(str) {
	let res = []  
	for (let i = 0; i < str.length; i++) {   
		res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-2) + ("00" + str.charCodeAt(i).toString(16)).slice(-4, -2)  
	}  
	let strCode = "\\u" + res.join("\\u")  
	strCode = strCode.replace(/\\/g, "%")  
	return unescape(strCode)  
}
export function iosPlay(content){
	var AVAudioSession = plus.ios.importClass("AVAudioSession"),
	AVAudioSessionObj = AVAudioSession.sharedInstance();
	AVAudioSessionObj.setCategoryerror('AVAudioSessionCategoryPlayback',null);
	AVAudioSessionObj.setActiveerror('YES', null);
	var AVSpeechSynthesizer = plus.ios.importClass("AVSpeechSynthesizer");
	var sppech = new AVSpeechSynthesizer();  
	var AVSpeechUtterance = plus.ios.importClass("AVSpeechUtterance");  
	var utterance =  AVSpeechUtterance.speechUtteranceWithString(content);  
	utterance.plusSetAttribute("rate",0.5);   
	sppech.speakUtterance(utterance);
}

export function androidPlay(content){
	var main = plus.android.runtimeMainActivity();
	var SpeechUtility = plus.android.importClass('com.iflytek.cloud.SpeechUtility');
	SpeechUtility.createUtility(main, "appid=53feacdd");
	var SynthesizerPlayer = plus.android.importClass('com.iflytek.cloud.SpeechSynthesizer');
	var play = SynthesizerPlayer.createSynthesizer(main, null);
	play.startSpeaking(changeEnCode(content), null); 
}

export function audioPlay(content){
	if(uni.getSystemInfoSync().platform=='ios'){
		iosPlay(content)
	}else{
		androidPlay(content)
	}
}