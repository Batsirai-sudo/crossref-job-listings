import { createAction,props } from '@ngrx/store';
import { APIResponse } from '../models/job-interface';
import { JobService } from '../services/job.service';

export const retrieveJobs = createAction(
    '[Jobs Component] Get Jobs',
    props<{jobs: APIResponse<JobService>}>());
    
export const pagination = createAction(
    '[Pagination] Click Pagination',
    props<{page: number}>());

export const loading = createAction(
   '[isLoading Fetching/API] Is Fetching',
   props<{isLoading: boolean}>());