// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** sendSmsCode POST /api/sms/code */
export async function sendSmsCodeUsingPost(
  body: API.SmsCodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/sms/code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
