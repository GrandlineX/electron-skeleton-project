import { BaseAction, IBaseKernelModule } from '@grandlinex/e-kernel';
import { ExampleDB } from '../database';
import ExampleEntity from '@/SkeletonModule/database/Entities/ExampleEntity';

export default class ListExampleAction extends BaseAction {
  constructor(module: IBaseKernelModule<any, any, any>) {
    super('/example/list', module);
    this.handler = this.handler.bind(this);
  }

  async handler(
    event: Electron.CrossProcessExports.IpcMainInvokeEvent,
    args: any
  ): Promise<ExampleEntity[]> {
    const mdb = this.getModule().getDb() as ExampleDB;

    return mdb.exampleEntity.getObjList({
      search: {
        age: 42,
      },
    });
  }
}
