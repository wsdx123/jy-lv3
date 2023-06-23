import { useState } from 'react'

import styles from 'components/select/Select.module.css'
import { DownIcon } from 'assets/svg'

const SELECT_LIST = [
  { id: 1, value: '리액트' },
  { id: 2, value: '자바' },
  { id: 3, value: '스프링' },
  { id: 4, value: '리액트네이티브' },
]

function Select() {
  const [open, setOpen] = useState(false)
  const [choosed, setChoosed] = useState(SELECT_LIST[0].value)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleChoose = (e) => {
    console.log(e)
    setChoosed(e.target.textContent)
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <h1 className={styles.title}>Select</h1>
      <div className={styles.select}>
        <button className={styles.openSelect} type='button' onClick={handleOpen}>
          <span>{choosed}</span>
          <DownIcon />
        </button>
        {open && (
          <div className={styles.selectContainer}>
            <ul>
              {SELECT_LIST.map((el) => {
                return (
                  <li className={styles.selectItem} key={`lv3-drop_${el.id}`}>
                    <button type='button' onClick={handleChoose}>
                      {el.value}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Select
