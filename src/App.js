import Input from 'components/input'
import Select from 'components/select'
import styles from 'App.module.css'
import ModalBox from 'components/modalBox'

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <Select />
      <ModalBox />
    </div>
  )
}

export default App
