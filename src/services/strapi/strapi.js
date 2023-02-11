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

  transformCard = (book) => {
    const resBook = {
      id: book.id,
      issueYear: book.issueYear,
      rating: Math.round(book.rating),
      categories: book.categories,
      title: book.title,
      authors: book.authors,
      image: this.getImage(book.image?.url),
      isBooked: true,
    };
    return resBook;
  };

  getImage(imageUrl) {
    return `${this.apiBase}${imageUrl}`;
  }
}
