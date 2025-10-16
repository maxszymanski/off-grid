import { create } from 'zustand'

type ModalStore = {
    openModal: 'form-modal' | null
    setOpenModal: (modalType: 'form-modal' | null) => void
    closeModal: () => void
}

const useModalStore = create<ModalStore>()((set) => ({
    openModal: null,
    setOpenModal: (modalType) => set({ openModal: modalType }),
    closeModal: () => set({ openModal: null }),
}))

export default useModalStore
