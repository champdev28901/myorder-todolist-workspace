import Swal from "sweetalert2";


const Modal = ({ ...ags }) => {
  const { icon, text, title, isShowCancel } = ags
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'Ok',
    confirmButtonColor: "#3ba676",
    allowOutsideClick: false,
    showDenyButton: false,
    denyButtonText: '',
    showCancelButton: isShowCancel,
  })
}


export { Modal }
