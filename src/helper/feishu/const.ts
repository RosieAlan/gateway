/*
 * @Author: Cookie
 * @Description: 飞书环境变量
 */

import { getConfig } from "@/utils";

const { FEISHU_APP_ID,FEISHU_APP_SECRET} = getConfig()

export const APP_ID = FEISHU_APP_ID
export const APP_SECRET = FEISHU_APP_SECRET
