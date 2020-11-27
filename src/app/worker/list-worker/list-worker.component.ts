import {Component, NgZone, OnInit} from '@angular/core';
import {WorkerService} from '../../services/worker/worker.service';
import {Router} from '@angular/router';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.css']
})
export class ListWorkerComponent implements OnInit {
  public titles: ({ icon: string; id: number; title: string })[];
  private workers:any[] = [];
  private datagridWorker: any;
  constructor(private workerService : WorkerService,
              private ngZone:NgZone,private router:Router
              ) {
    this.titles = [
      {"id":1,"icon":"../../assets/icons/formation.png","title":"Liste des employées"},
      {"id":2,"icon":"../../assets/icons/visitMedical.png","title":"Liste des visites médicales"},
      {"id":3,"icon":"../../assets/icons/documAdmin.png","title":"Liste des formations "},
      {"id":4,"icon":"../../assets/icons/entretien.png","title":"Liste des entretiens"}
    ];

    this.edit = this.edit.bind(this);
  };

  ngOnInit() {
    this.workerService.getWorkers().subscribe(workers => {

      workers.forEach( (worker :any)=>{
        if(worker.employmentContract == null ){
          worker.Startdate = null;
          worker.statusP = 0;
          this.workers.push(worker);
        }else {
          worker.employmentContract = worker.employmentContract;
        }
        console.log("hahaha"+this.workers);
      });
    });
  }

  static calculStatus(status){
    if (status === 'Brouillon'){
      return 20;
    }
    if (status === 'En_cours'){
      return 60;
    }
    if (status === 'Terminé'){
      return 100;
    }
    if (status === 'A_venir'){
      return 5;
    }
  }

  edit(event){
    this.ngZone.run(()=>this.router.navigate(['/updateWorker',event.row.data.idPerson]))
  }

  format(value) {
    if (value*100 === 20){
      return 'Brouillon à '+ value * 100 + '%';
    }
    if (value*100 === 60){
      return 'En cours à '+ value * 100 + '%';
    }
    if (value*100 === 100){
      return 'Terminé à '+ value * 100 + '%';
    }
    if (value*100 === 5){
      return 'A venir '+ value * 100 + '%';
    }
    if(value*100 === 0){
      return value * 100 + '%'
    }
  }

  formatVisite(value){
    return "A Finir"
  }

   bestCopyEver(src) {
    return Object.assign({}, src);
  }

  deleteWorker(e: any) {
    console.log("deleting worker");
    console.log(e);
    //sxuiklet name = e.date.userNamePerson;
    this.workerService.deleteWorker(e.data.idPerson).subscribe(worker => {
      notify("Supprimé ", "success", 3000);
      this.datagridWorker.refresh();
    },
        error => {
          console.log(error);
          notify("Erreur lors de la suppression ", "error", 3000);

        }
    )
  }

  initWorker(e: any) {
    console.log(e);
    this.datagridWorker = e.component;
  }

}
