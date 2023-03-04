import axios from 'axios';

export class Strapi {
  apiBase = 'https://strapi.cleverland.by';


  async getBooks() {
    const response = await fetch(`${this.apiBase}/api/books`);

    const data = await response.json();

    return data.map(this.transformCard);
  }

  async getBook(id) {
    const response = await fetch(`${this.apiBase}/api/books/${id}`);
    const book = await response.json();

    return Promise.resolve(this.transformCurrBook(book));
  }

  async getCategories() {
    const response = await fetch(`${this.apiBase}/api/categories`);

    const data = await response.json();

    return [{ name: 'Все книги', path: 'all' }, ...data];
  }

  async signUp(formData) {
    const authResponse = await axios.post(
      `${this.apiBase}/api/auth/local/register`,
      {
        ...formData,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return authResponse;
  }

  async signIn(userCreds, jwtToken) {
    const authResponse = await axios.post(
      `${this.apiBase}/api/auth/local`,
      {
        ...userCreds,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return authResponse;
  }

  transformCard = (book) => ({
    ...book,
    image: book.image?.url ? this.getImage(book.image.url) : null,
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
