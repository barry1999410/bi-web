// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** handleSse GET /api/chat/sse */
export async function handleSseUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleSseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.SseEmitter>('/api/chat/sse', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ChatWithAi POST /api/chat/sse/ai */
export async function chatWithAiUsingPost(body: string, options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/chat/sse/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
