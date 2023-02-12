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

  async getBook(id) {
    const response = await fetch(`${this.apiBase}/api/books/${id}`);
    const book = await response.json();

    if (!response.ok) {
      throw new Error(response.status);
    }

    return Promise.resolve(this.transformCurrBook(book));
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

  formatDate = (date) => {
    const years = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ];

    const localeDate = new Date(date).toLocaleDateString().split('/');

    const day = localeDate[1];
    const month = years[localeDate[0] - 1];
    const year = localeDate[2];

    return `${day} ${month} ${year}`;
  };

  transformComments = (comments) => {
    if (!comments) return null;

    return comments.map((comment) => ({
      ...comment,
      user: {
        ...comment.user,
        avatarUrl: comment.user.avatarUrl ? this.getImage(comment.user.avatarUrl) : null,
      },
      createdAt: this.formatDate(comment.createdAt),
    }));
  };

  getImage(imageUrl) {
    return `${this.apiBase}${imageUrl}`;
  }
}
