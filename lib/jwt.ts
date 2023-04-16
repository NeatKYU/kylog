import crypto from 'crypto';
export const base64 = (json: object) => {
  const stringified = JSON.stringify(json)
  // JSON을 문자열화
  const base64Encoded = Buffer.from(stringified).toString("base64")
  // 문자열화 된 JSON 을 Base64 로 인코딩
  const paddingRemoved = base64Encoded.replaceAll("=", "")
  // Base 64 의 Padding(= or ==) 을 제거

  return paddingRemoved
}

export const header = {
  alg: "HS256",
  typ: "JWT",
}

const encodedHeader = (header: object) => {
  return base64(header)
}

const makePayload = (payload: object) => {
  return base64(payload)
}

const makeSignature = (header: string, payload: object) => {
  return crypto
          .createHmac('sha256', process.env.JWT_KEY as string)
          .update(`${header}.${payload}`)
          .digest('base64')
          .replaceAll('=', '');
}

export const genToken = (header: object, payload: object) => {
  const resultHeader = encodedHeader(header);
  return `${resultHeader}.${makePayload(payload)}.${makeSignature(resultHeader, payload)}`
}