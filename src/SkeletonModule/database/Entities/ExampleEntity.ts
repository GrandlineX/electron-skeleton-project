import { Column, CoreEntity, Entity } from '@grandlinex/e-kernel';

@Entity('ExampleEntity')
export default class ExampleEntity extends CoreEntity {
  @Column({
    dataType: 'string',
  })
  title: string;

  @Column({
    canBeNull: true,
    dataType: 'int',
  })
  age: number | null;

  @Column({
    canBeNull: true,
    dataType: 'text',
  })
  description: string | null;

  constructor(title: string, age?: number, description?: string) {
    super();
    this.title = title;
    this.age = age || null;
    this.description = description || null;
  }
}
