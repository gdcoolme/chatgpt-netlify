import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 如果本项目对你有所帮助，可以给小猫 [买点零食](http://www.gdcool.net/gdpay.jpg)，但不接受任何付费功能请求。
- 本项目由 [@果冻](http://www.gdcool.net) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发。本网站仅作为项目演示，不提供服务，API Key由我自己免费提供，珍惜调用次数，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
