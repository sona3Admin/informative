

import Swal from 'sweetalert2';
import "./style.css";

export const SwalAlert = ({text,status}) => {
 
 Swal.fire({
    title:text ,
    allowOutsideClick: false,
    timer:2000,
    showConfirmButton: false,
    icon: status ? 'success' : "error",
    showClass: {
      popup: `
        ${status ? 'SwalSuccessStyle' : 'SwalErrorStyle' } 
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
       ${status ? 'SwalSuccessStyle' : 'SwalErrorStyle' } 
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    },
  })


};
