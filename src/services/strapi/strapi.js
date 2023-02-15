export class Strapi {
  apiBase = 'https://strapi.cleverland.by';

  async getBooks() {
    const response = await fetch(`${this.apiBase}/api/books`);
    const data = await response.json();

    return Promise.resolve(data.map(this.transformCard));
  }

  async getBook(id) {
    const response = await fetch(`${this.apiBase}/api/books/${id}`);
    const book = await response.json();

    return Promise.resolve(this.transformCurrBook(book));
  }

  getCategories = async () => {
    const response = await fetch(`${this.apiBase}/api/categories`);
    const data = await response.json();

    return Promise.resolve([{ name: 'Все книги', path: 'all' }, ...data]);
  };

  transformCard = (book) => ({
    ...book,
    rating: Math.round(book.rating),
    image: this.getImage(book.image?.url),
  });

  transformCurrBook = (book) => ({
    ...book,
    rating: Math.round(book.rating),
    images: this.transformImagesUrl(book.images),
    comments: this.transformComments(book.comments),
  });

  transformImagesUrl = (images) =>
    images.map((image) => ({
      url: this.getImage(image.url),
    }));

  transformComments = (comments) => {
    if (!comments) return null;

    return comments.map((comment) => ({
      ...comment,
      user: {
        ...comment.user,
        avatarUrl: comment.user.avatarUrl ? this.getImage(comment.user.avatarUrl) : null,
      },
    }));
  };

  getImage = (imageUrl) => `${this.apiBase}${imageUrl}`;
}
