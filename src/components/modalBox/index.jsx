import { useState } from 'react'

import ModalOne from 'components/modal/ModalOne'
import ModalTwo from 'components/modal/ModalTwo'

import styles from 'components/modalBox/ModalBox.module.css'

function ModalBox() {
  const [openModalOne, setOpenModalOne] = useState(false)
  const [openModalTwo, setOpenModalTwo] = useState(false)

  const handleModalOne = () => {
    setOpenModalOne(true)
  }

  const handleModalTwo = () => {
    setOpenModalTwo(true)
  }
  return (
    <div>
      <h1 className={styles.title}>Modal</h1>
      <button onClick={handleModalOne} type='button'>
        open Modal
      </button>
      <button onClick={handleModalTwo} type='button'>
        open Modal
      </button>
      {openModalOne && <ModalOne open={setOpenModalOne} />}
      {openModalTwo && <ModalTwo open={setOpenModalTwo} />}
    </div>
  )
}

export default ModalBox
