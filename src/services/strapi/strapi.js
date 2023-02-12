export class Strapi {
  apiBase = 'https://strapi.cleverland.by';

  async getBooks() {
    const response = await fetch(`${this.apiBase}/api/books`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(response.status);
    }

    return Promise.resolve(data.map(this.transformCard));
  }

  getCategories = async () => {
    const response = await fetch(`${this.apiBase}/api/categories`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(response.status);
    }

    return Promise.resolve([{ name: 'Все книги', path: 'all' }, ...data]);
  };

  transformCard = (book) => ({
    ...book,
    rating: Math.round(book.rating),
    image: this.getImage(book.image?.url),
  });

  getImage(imageUrl) {
    return `${this.apiBase}${imageUrl}`;
  }
}
