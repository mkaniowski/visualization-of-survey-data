import { Button, Card, Textarea, Wrapper } from '@/shared/components'

import styles from './home.module.scss'

const Home = () => {
  return (
    <Wrapper
      backgroundType='waves'
      className={styles.wrapper}
    >
      <h1>Visualization of survey data</h1>
      <Card>
        <Textarea />
      </Card>
      <Button label='xddddd' />
    </Wrapper>
  )
}

export default Home
