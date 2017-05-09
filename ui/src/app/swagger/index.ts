/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Query, FilterValue, SortItem, Column, Results, ResultItem } from './models';
import 'rxjs/Rx';

@Injectable()
/**
 * Created with angular2-swagger-client-generator v
 */
export class ApiClientService {
	domain: string;

	constructor(public http: Http) {
		this.domain = '';
	}
  /*
	constructor(public http: Http, options?: any) {
		var domain = (typeof options === 'object') ? options.domain : options;
		this.domain = typeof(domain) === 'string' ? domain : '';
		
		if(this.domain.length === 0) {
			throw new Error('Domain parameter must be specified as a string.');
		}
		
	}
  */


	/**
  * Issues a search
  *
	* @method
	* @name getSearch
	* @param {query} query - The Target Manager API allows callers to manage the definitions of targets and control the automated push to other instances via a drop directory approach
	* 
	*/
	public getSearch(query: Query) {
		let payload = {};
		let queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');


		payload['query'] = query;
		let uri = `/search`;

		return this.http
			.get(this.domain + uri, { headers: headers, params: queryParameters })
			.map((res: Response) => {
				return res.json();
			});
	}


}
