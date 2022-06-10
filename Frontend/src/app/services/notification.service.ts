import { Injectable, Input } from '@angular/core';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
});

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  notificationSuccesEvent() {
    Toast.fire({
      icon: 'success',
      title: 'Elemento aggiunto con successo',
    });
  }

  notificationErroEvent() {
    Toast.fire({
      icon: 'error',
      title: 'Errore durante inserimento',
    });
  }

  notificationCancelEvent() {
    Toast.fire({
      icon: 'info',
      title: 'Operazione Annullata'
    });
  }
}
