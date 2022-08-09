interface Item {
  id: number;
}

interface RestRepositoryType<T extends Item> {
  loadAll: () => Promise<Array<T>>;
  create: (item: Partial<T>) => Promise<T>;
  delete: (id: number) => Promise<T>;
}

export class RestRepository<T extends Item> implements RestRepositoryType<T> {
  constructor(public urlAPI: string) {}

  async loadAll() {
    const response = await fetch(this.urlAPI);
    return response.json();
  }

  async create(item: Partial<T>) {
    const response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  }

  async delete(id: number) {
    const response = await fetch(this.urlAPI + id, {
      method: "DELETE",
    });
    return response.json();
  }
}
