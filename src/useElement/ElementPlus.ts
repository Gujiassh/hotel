import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElContainer,
  ElAside,
  ElMain,
  ElIcon,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdownMenu,
  ElDropdown,
  ElHeader,
  ElTableColumn,
  ElTable,
  ElCol,
  ElRow,
  ElAvatar,
  ElInput,
  ElSelect,
  ElOption,
  ElMessageBox
} from 'element-plus/lib/components'

const elComponents = [
  ElButton,
  ElContainer,
  ElAside,
  ElMain,
  ElIcon,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdownMenu,
  ElDropdown,
  ElHeader,
  ElTableColumn,
  ElTable,
  ElMenu,
  ElCol,
  ElRow,
  ElAvatar,
  ElInput,
  ElSelect,
  ElOption,
  ElMessageBox
]

export default function (app: App): void {
  for (const componentItem of elComponents) {
    app.component(componentItem.name, componentItem)
  }
}
