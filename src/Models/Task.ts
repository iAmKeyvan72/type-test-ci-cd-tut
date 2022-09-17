import { v4 as uuidv4 } from 'uuid';

export class Task {
  private readonly _id: string;
  private _title: string;

  constructor(title: string) {
    this._id = uuidv4();
    this._title = title;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }
}
