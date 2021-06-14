import { enableLiveReload } from 'electron-compile'
import electronDebug from 'electron-debug'

const devtools = () => {
  enableLiveReload()
  electronDebug({ showDevTools: true })
}

export default devtools
