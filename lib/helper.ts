const REM_NUMBER = 16;
/**
 * 픽셀 단위를 rem단위로 바꿔서 리턴해주는 함수
 * @param px 스타일 지정 픽셀 
 */
export const toRem = (px: number): string => {
	return px/REM_NUMBER + 'rem';
}