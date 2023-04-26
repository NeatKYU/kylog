const REM_NUMBER = 16;
/**
 * 픽셀 단위를 rem단위로 바꿔서 리턴해주는 함수
 * @param px 스타일 지정 픽셀 
 */
export const toRem = (px: number): string => {
	return px/REM_NUMBER + 'rem';
}

export const dateToHowover = (date: string | Date) => {
	const seconds = 1;
	const minute = seconds * 60;
	const hour = minute * 60;
	const day = hour * 24;
	const mon = day * 30;
	const year = mon * 12;

	//현재시간
	const now = new Date();
	//기준시간 
	const writeDay = new Date(date);
	//현재 시간과 기준시간의 차이를 getTime을 통해 구한다 
	let difference = now.getTime() - writeDay.getTime();
	//초로 바꿔준다 
	difference = Math.trunc(difference / 1000);

	let result;

	if(difference < minute ){
    result = Math.trunc(difference / seconds) + '바로 전';
  }else if(difference < hour){
    result = Math.trunc(difference / minute) + '분 전';
  }else if(difference < day){
    result = Math.trunc(difference / hour) + '시간 전';
  }else if(difference < mon){
    result = Math.trunc(difference / day) + '일 전';
  }else if(difference < year){
    result = Math.trunc(difference / mon) + '개월 전';
  }else{
    result = Math.trunc(difference / year) + '년 전';
  }

	return result;
}

export const calculateReadingTime = (text: string) => {
	const wordsPerMinute = 200; // 평균적으로 분당 200단어를 읽는 것으로 가정
	const wordCount = text.trim().split(/\s+/).length; // 공백을 기준으로 단어 수를 계산
	const readingTimeInMinutes = wordCount / wordsPerMinute;

	// 결과를 반올림하여 분 단위로 반환
	return Math.ceil(readingTimeInMinutes);
}
  