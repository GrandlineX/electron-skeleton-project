import { BaseKernelModule, IKernel } from '@grandlinex/e-kernel';
import ExampleDB from './database/ExampleDB';
import ListExampleAction from './action/ListExampleAction';

export default class ExampleModule extends BaseKernelModule<
  ExampleDB,
  null,
  null
> {
  constructor(kernel: IKernel) {
    super('example', kernel);
    // Register actions for controlling the main window

    this.addAction(new ListExampleAction(this));
  }

  async initModule(): Promise<void> {
    const db = new ExampleDB(this);
    this.setDb(db);
  }
}
