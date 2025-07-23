import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PipelineService {

  constructor( private http: HttpClient ) {}

   backendUri = environment.backendUrl + '/api';

  getPipelines() {
    return this.http.get(`${this.backendUri}/pipelines`);
  }

  updatePipeline(id: number, data: any) {
    return this.http.put(`${this.backendUri}/pipelines/${id}`, data);
  }

  createPipeline(data: any) {
    return this.http.post(`${this.backendUri}/pipelines`, data);
  }

  deletePipeline(id: number) {
    return this.http.delete(`${this.backendUri}/pipelines/${id}`);
  }
}
