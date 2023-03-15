import { v4 as uuid } from "uuid";

export class BaseModel {
  constructor() {
    this.id = uuid();
  }
  //Обновление uid
  updateUid(uid)
  {
    this.id = uid;
  }
}