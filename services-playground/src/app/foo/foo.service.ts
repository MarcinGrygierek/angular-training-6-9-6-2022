export class FooService {
  data: number[] = [];
  constructor() {
    console.log('FooService is constructed');
    const count = Math.round(Math.random() * 10);

    for(let i = 0; i < count; i++) {
      this.data.push(i);
    }
   }
}
