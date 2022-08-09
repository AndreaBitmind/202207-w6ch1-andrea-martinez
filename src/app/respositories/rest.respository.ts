interface Item {
  id: number;
}

interface RestRepositoryType<T extends Item> {
  loadAll: () => Promise<Array<T>>;
}

export class RestRepository<T extends Item> implements RestRepositoryType<T> {
  constructor(public urlAPI: string) {}

  async loadAll() {
    const response = await fetch(this.urlAPI);
    return response.json();
  }
}
