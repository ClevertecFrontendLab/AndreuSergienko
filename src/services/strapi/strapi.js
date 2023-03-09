/* eslint-disable class-methods-use-this */
import axios from 'axios';

export class Strapi {
  apiBase = 'https://strapi.cleverland.by';

  async getBooks(jwt) {
    const booksResponse = await axios.get(`${this.apiBase}/api/books`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    return booksResponse.data.map(this.transformCard);
  }

  async getBook(id, jwt) {
    const bookResponse = await axios.get(`${this.apiBase}/api/books/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    return this.transformCurrBook(bookResponse.data);
  }

  async getCategories(jwt) {
    const categoriesResponse = await axios.get(`${this.apiBase}/api/categories`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    return [{ name: 'Все книги', path: 'all' }, ...categoriesResponse.data];
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

  async signIn(userCreds) {
    const authResponse = await axios.post(
      `${this.apiBase}/api/auth/local`,
      {
        ...userCreds,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return authResponse;
  }

  signOut() {
    localStorage.removeItem('jwt');
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
