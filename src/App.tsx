import { Theme } from '@radix-ui/themes'
import { Layout } from './components/layout'
import { MainApp } from './components/app'

function App() {
  return (
    <Theme grayColor="mauve">
      <Layout>
        <MainApp />
      </Layout>
    </Theme>
  )
}

export default App
