import { Button, Card, Textarea } from '@/shared/components'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles['wrapper']}>
      <h1>Visualization of survey data</h1>
      <Card>
        <Textarea />
      </Card>
      <Button label='xddddd' />
    </div>
  )
}

export default Home
