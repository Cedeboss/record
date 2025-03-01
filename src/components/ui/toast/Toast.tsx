import { Alert, Toast, ToastContainer } from "react-bootstrap"
import { ToastType } from "../../../defitions/ToatsType"

interface ToastDataType {
    showToast: boolean
    toggleShowToast: () => void
    toastdata: ToastType
}

export const ToastComp = ({ToastProps}: any) => {

const {showToast, toggleShowToast, toastData} = ToastProps

    return(
        <ToastContainer position="top-center" className="p-3" style={{ zIndex: 150000 }}>
{/* <Toast> */}
        <Toast
        className="absolutu"
        show={showToast}
        onClose={toggleShowToast}
        delay={toastData?.delay}
        bg={toastData?.type}
        autohide
        >
        <Toast.Body
        className="text-light mb-0">
          <p className="mb-0">
            <i className={`${toastData?.icon} me-2 fs-3 text-light`}></i>{" "}
            <b>{toastData?.title}</b>
          </p>
          <p className="px-3">
            <strong className="me-auto">
              {toastData?.message}
            </strong>
          </p>
        </Toast.Body>
      </Toast>
        </ToastContainer>

    )
}