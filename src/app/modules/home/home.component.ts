import { Component, OnInit } from '@angular/core';
import { APIResponse, JobInterface } from 'src/app/core/models/job-interface';
import { JobService } from 'src/app/core/services/job.service';
import { Store } from '@ngrx/store';
import * as JobActionService from 'src/app/core/store/job.action';
import { generatePagenation,generateOffset }  from 'src/app/core/utils/helper'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort!: string;
  public jobs!: any;
  public isLoading!: boolean;
  public pagination!: Array<any>;
  public active_pagination = 1;
  public jobDetails!: JobInterface;

  constructor( 
    private jobService: JobService,
    private store: Store<any>) { 
      this.store.subscribe(data =>  this.isLoading = data.state.isLoading); 
    }   
  
  ngOnInit(): void {  
     this.gettingJobs()
  }       
   
  gettingJobs(search?:string): void {
     this.store.subscribe(data =>  this.active_pagination = data.state.page); 
     const offset = generateOffset(this.active_pagination)
     this.jobService 
     .getJobList({search,offset})
     .subscribe((jobList: APIResponse<JobInterface>) => {
         const jobs:any = jobList.message.items;
         this.store.dispatch(JobActionService.retrieveJobs({jobs}))

         this.pagination = generatePagenation(jobList.message['total-results'],this.active_pagination )
         this.store.dispatch(JobActionService.loading({isLoading:false}))

         this.store.subscribe((data: any) =>this.jobs = data.state.jobs)
     })  
  } 


  onClickPaginationNumber(page: number) {
         this.onPaginate(page)
  }

  paginationNext(){
    this.onPaginate(this.active_pagination+1)

  }
 
  paginationBack(){ 
    if(this.active_pagination !==1){
      this.onPaginate(this.active_pagination-1) 
    }
  }

  onPaginate(page:number){
    this.store.dispatch(JobActionService.pagination({page:page}))
    this.store.dispatch(JobActionService.loading({isLoading:true}))
    this.gettingJobs()  
  }

  onClickJob(data:JobInterface){
      this.jobDetails = data;
  }


}