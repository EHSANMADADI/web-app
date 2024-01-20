import Swal from 'sweetalert2'
import React from 'react'

export default function Sweetalert() {
  return (
     Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        })
  )
}
