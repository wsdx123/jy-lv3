import styles from 'components/modal/ModalTwo.module.css'

function ModalTwo({ open }) {
  const handleClose = () => {
    open(false)
  }

  return (
    <div>
      <div className={styles.background} onClick={handleClose} />
      <div className={styles.container}>
        <div>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요</div>
        <button className={styles.closeBtn} onClick={handleClose}>
          x
        </button>
      </div>
    </div>
  )
}

export default ModalTwo
