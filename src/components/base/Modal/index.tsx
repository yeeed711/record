import type { ReactElement, ReactNode } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { ICON } from '@constants'
import styled from 'styled-components'

type ModalPropsType = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

const Modal = ({
  showModal,
  setShowModal,
  children
}: ModalPropsType): ReactElement | null => {
  const modalRef = useRef(null)

  const handleCloseModal = (e: { target: any }): void => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const handleCloseKey = useCallback(
    (e: KeyboardEvent) => {
      if (!showModal) return
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [showModal]
  )

  useEffect(() => {
    document.addEventListener('keyup', handleCloseKey)
    return () => {
      document.removeEventListener('keyup', handleCloseKey)
    }
  }, [handleCloseKey])

  return (
    <>
      {showModal && (
        <StyledContainer ref={modalRef} onClick={handleCloseModal}>
          <Wrapper>{children}</Wrapper>
          <ClosedBtn
            onClick={() => {
              setShowModal(false)
            }}>
            <ICON.CLOSE />
          </ClosedBtn>
        </StyledContainer>
      )}
    </>
  )
}

export default Modal

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`
const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const ClosedBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  svg {
    stroke: white;
  }
  background-color: transparent;
`
