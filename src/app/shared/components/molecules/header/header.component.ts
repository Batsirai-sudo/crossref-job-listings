import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { APIResponse, JobInterface } from 'src/app/core/models/job-interface';
import { JobService } from 'src/app/core/services/job.service';
import * as JobActionService from 'src/app/core/store/job.action';
import { generatePagenation } from 'src/app/core/utils/helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pagination!: Array<any>;

  constructor(
    private jobService: JobService,
    private store: Store<number>) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.store.dispatch(JobActionService.loading({isLoading:true}))
   const search = form.value.search;
    this.jobService 
    .getJobList({search,offset:1})
    .subscribe((jobList: APIResponse<JobInterface>) => {
        const jobs:any = jobList.message.items;  
        this.store.dispatch(JobActionService.retrieveJobs({jobs}))
        this.store.dispatch(JobActionService.pagination({page:0}))

        this.pagination = generatePagenation(jobList.message['total-results'],1)
        this.store.dispatch(JobActionService.loading({isLoading:false}))
    }) 
  }
  
}
