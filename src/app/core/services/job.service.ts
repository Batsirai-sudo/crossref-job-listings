import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, JobInterface, JobProps } from '../models/job-interface';

@Injectable({ 
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { } 

  getJobList(props:JobProps): Observable<APIResponse<JobInterface>> {
    let search = props.search ? props.search : '';
         
    const params = new HttpParams().set('query', search ).set('offset',props.offset)

    return this.http.get<APIResponse<JobInterface>>(`${env.BASE_URL}/${env.PATH}`,{params})
  }
}
