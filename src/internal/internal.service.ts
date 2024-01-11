import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class InternalService {
  constructor(private readonly httpService: HttpService) {}

  sendBlueprint(body: any) {
    return this.httpService
      .post('http://localhost:3002', body)
      .pipe(map((resp) => resp.data));
  }
}
