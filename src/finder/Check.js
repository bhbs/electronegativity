import logger from 'winston';

import { sourceTypes } from '../parser/types';

export class Check {
  constructor (id, short, description, type) {
    this._id = "";
    this._short = "";
    this._description = "";
    this._type = null;
  }

  get id() { return this._id; }
  get short() { return this._short; }
  get description() { return this._description; }
  get type() { return this._type; }

  match (data) {
    logger.debug("Matching using check: " + this.id);
  }

}

export class JavaScriptCheck extends Check {
  constructor (id, short, description) {
    const type = sourceTypes.JAVASCRIPT;
    super(id, short, description, type);
  }

  match (data) {
    super.match(data);
  }

}

export class HTMLCheck extends Check {
  constructor (id, short, description) {
    const type = sourceTypes.HTML;
    super(id, short, description, type);
  }

  match (data) {
    super.match(data);
  }
}
