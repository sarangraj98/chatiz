import {Entity, model, property} from '@loopback/repository';

@model()
export class Credential extends Entity {

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;



  constructor(data?: Partial<Credential>) {
    super(data);
  }
}
