import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

import { Cactus} from '../models/blogPlantas';
import { Curiosidades} from '../models/blogPlantas';
import { PlantasInterior} from '../models/blogPlantas';
import { PlantasResistent} from '../models/blogPlantas';

import { Global} from './global';

@Injectable()
export class BlogPlantasService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
      this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveCactus(cactus:Cactus): Observable<any>{
      let params = JSON.stringify(cactus);
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this._http.post<any>(this.url+'save-cactus', params, {headers:headers});
    }

    getCactuss(): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this._http.get(this.url+'cactuss', {headers: headers});
  	}

  	getCactus(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this._http.get(this.url+'cactus/'+id, {headers: headers});
  	}

  	deleteCactus(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this._http.delete(this.url+'cactus/'+id, {headers: headers});
  	}

  	updateCactus(cactus): Observable<any>{
  		let params = JSON.stringify(cactus);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this._http.put(this.url+'cactus/'+cactus._id, params, {headers: headers});
  	}




// ********************

saveCuriosidades(curiosidades:Curiosidades): Observable<any>{
  let params = JSON.stringify(curiosidades);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post<any>(this.url+'save-curiosidades', params, {headers:headers});
}

getCuriosidadess(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'curiosidadess', {headers: headers});
}

getCuriosidades(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'curiosidades/'+id, {headers: headers});
}

deleteCuriosidades(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.delete(this.url+'curiosidades/'+id, {headers: headers});
}

updateCuriosidades(curiosidades): Observable<any>{
  let params = JSON.stringify(curiosidades);
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.put(this.url+'curiosidades/'+curiosidades._id, params, {headers: headers});
}






// ****************************

savePlantasInterior(plantasInterior:PlantasInterior): Observable<any>{
  let params = JSON.stringify(plantasInterior);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post<any>(this.url+'save-plantas-interior', params, {headers:headers});
}

getPlantasInteriors(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'plantas-interiors', {headers: headers});
}

getPlantasInterior(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'plantas-interior/'+id, {headers: headers});
}

deletePlantasInterior(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.delete(this.url+'plantas-interior/'+id, {headers: headers});
}

updatePlantasInterior(plantasInterior): Observable<any>{
  let params = JSON.stringify(plantasInterior);
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.put(this.url+'plantas-interior/'+plantasInterior._id, params, {headers: headers});
}

// **************************************
savePlantasResistent(plantasResistent:PlantasResistent): Observable<any>{
  let params = JSON.stringify(plantasResistent);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post<any>(this.url+'save-plantas-resistentes', params, {headers:headers});
}

getPlantasResistents(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'plantas-resistentess', {headers: headers});
}

getPlantasResistent(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.get(this.url+'plantas-resistentes/'+id, {headers: headers});
}

deletePlantasResistent(id): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.delete(this.url+'plantas-resistentes/'+id, {headers: headers});
}

updatePlantasResistent(plantasResistent): Observable<any>{
  let params = JSON.stringify(plantasResistent);
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this._http.put(this.url+'plantas-resistentes/'+plantasResistent._id, params, {headers: headers});
}


}
