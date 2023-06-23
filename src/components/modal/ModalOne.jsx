import styles from 'components/modal/ModalOne.module.css'

function ModalOne({ open }) {
  const handleClose = () => {
    open(false)
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.container}>
        <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요</div>
        <div className={styles.btnContainer}>
          <button onClick={handleClose}>닫기</button>
          <button>확인</button>
        </div>
      </div>
    </div>
  )
}

export default ModalOne
