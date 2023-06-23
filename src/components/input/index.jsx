import { useState } from 'react'
import styles from 'components/input/Input.module.css'

function Input() {
  const [name, setName] = useState('')
  const [num, setNum] = useState(0)

  const handleNum = (e) => {
    const removeComma = Number(e.target.value.replaceAll(',', ''))
    setNum(removeComma.toLocaleString())
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const noCommaNum = num.replaceAll(',', '')
    alert(`{ name: ${name}, price: ${noCommaNum} }`)
  }

  return (
    <div>
      <h1 className={styles.title}>Input</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleName} />
        <input type='text' value={num} onChange={handleNum} />
        <button type='submit'>저장</button>
      </form>
    </div>
  )
}

export default Input
