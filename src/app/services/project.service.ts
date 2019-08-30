import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
    public url: string;
    constructor(
        private http: HttpClient
    ) {
        this.url = Global.url;
    }
    testService() {
        return 'Probando el servicio de angular';
    }
    saveProject(project: Project): Observable<any> {
        const params = JSON.stringify(project);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/save-project', params, { headers });
    }
    getProjects(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/projects', { headers });
    }
    getProject(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/project/' + id, { headers });
    }
    deleteProject(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + '/project/' + id, { headers });
    }
    updateProject(project): Observable<any> {
        const params = JSON.stringify(project);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + '/project/' + project._id, params, { headers });
    }
}
