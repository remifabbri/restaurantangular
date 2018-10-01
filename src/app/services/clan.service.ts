import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clan } from '../models/clan.interface';
import { Observable } from 'rxjs'; 
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';


/*const curlrequest = curl - X GET--header 'Accept: application/json' --header "authorization: Bearer <API token>" 'https://api.clashroyale.com/v1/clans/%23RYYRLV'

console.log(curlrequest); 
const tagClan = "%23RYYRLV";
const authoriz = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyMDAzNTljLTdiOGQtNGYwYi1hZmQwLTllZTVmZTI2MTMwOSIsImlhdCI6MTUzNzczNTc1NCwic3ViIjoiZGV2ZWxvcGVyLzhkZGYwMjI1LTM2ZDgtZGY4MC0zOWRmLTQ5ZmYzMGFhOTRjNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4OC4xNjkuOTUuNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X2EBB1zAgcUdLCTqOGCJWPv0FVbw_6vHOyd0hEZkxeJB_hLsW77HF4utsbbbTJaJnWxq7U9NYLgF_gnRFgs5BA";

const apiData = ajax(`curl - X GET--header 'Accept: application/json' --header "authorization: Bearer <${authoriz}>," 'https://api.clashroyale.com/v1/clans/%23RYYRLV`)
  .map(res => console.log(res.status, res.response));*/



/*function getdataclan(subscription) {
  return fetch(`https://api.clashroyale.com/v1/clan/${tagClan}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer <${authoriz}>`
    },
    //,
    body: JSON.stringify(subscription)
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Bad status code from server.');
      }
      console.log(response.json()); 
      return dataclan = response.json();
    })
    .then(function (responseData) {
      if (!(responseData.data && responseData.data.success)) {
        throw new Error('Bad response from server.');
      }
    });
}*/


@Injectable({
  providedIn: 'root'
})
export class ClanService {

  //const tagClan = "%23RYYRLV";
  //const authoriz = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyMDAzNTljLTdiOGQtNGYwYi1hZmQwLTllZTVmZTI2MTMwOSIsImlhdCI6MTUzNzczNTc1NCwic3ViIjoiZGV2ZWxvcGVyLzhkZGYwMjI1LTM2ZDgtZGY4MC0zOWRmLTQ5ZmYzMGFhOTRjNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4OC4xNjkuOTUuNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X2EBB1zAgcUdLCTqOGCJWPv0FVbw_6vHOyd0hEZkxeJB_hLsW77HF4utsbbbTJaJnWxq7U9NYLgF_gnRFgs5BA";


  private _url: string = `https://api.clashroyale.com/v1/clan/%23RYYRLV`; 
  private _options = { headers: new HttpHeaders({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyMDAzNTljLTdiOGQtNGYwYi1hZmQwLTllZTVmZTI2MTMwOSIsImlhdCI6MTUzNzczNTc1NCwic3ViIjoiZGV2ZWxvcGVyLzhkZGYwMjI1LTM2ZDgtZGY4MC0zOWRmLTQ5ZmYzMGFhOTRjNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4OC4xNjkuOTUuNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.X2EBB1zAgcUdLCTqOGCJWPv0FVbw_6vHOyd0hEZkxeJB_hLsW77HF4utsbbbTJaJnWxq7U9NYLgF_gnRFgs5BA' }) };
   
  //clan: Clan[] = dataclan; 

  constructor(private http:HttpClient) { }
  
  getdataclan(): Observable<Clan[]>{
    return this.http.get<Clan[]>(this._url, this._options).pipe(map(data => data['_body']));
  }
}