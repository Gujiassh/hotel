import { App } from 'vue'
import elementPlusConfig from './ElementPlus'

export default function registerAppConfig(app: App): void {
  elementPlusConfig(app)
}
