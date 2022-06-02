import { createReducer, on } from '@ngrx/store';
import { retrieveJobs,pagination, loading } from './job.action';

export const initialState:any = {
  isLoading: true,
  jobs: [],
  page:1
};

export const jobReducer = createReducer(
  initialState,  
  on(retrieveJobs, (state,{jobs}) => {
      return {
        ...state,
        jobs,
      }
  }),
  on(pagination, (state,{page}) => {
       return {
         ...state,
         page
       }
  }),
  on(loading, (state,{isLoading}) => {
       return {
         ...state,
         isLoading
       }
  }),
);