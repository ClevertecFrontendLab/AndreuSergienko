import { success, defaultBg } from 'assets/images/main-page/books';

export const BOOKS = [
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'business',
    id: '1',
  },
  {
    poster: success,
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, 2019',
    isBooked: true,
    bookedTill: '03.05',
    reviews: [],
    category: 'detectives',
    id: '2',
  },
  {
    poster: success,
    images: [success, defaultBg, success, defaultBg, success, success, defaultBg, success, defaultBg, success],
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, 2019',
    isBooked: true,
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'children&books',
    id: '3',
  },
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    author: 'Адитья Бхаргава, 2019',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'foreign&literature',
    id: '4',
  },
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, 2019',
    bookedTill: '07.03',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'history',
    id: '5',
  },
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'classic&literature',
    id: '6',
  },
  {
    poster: success,
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов',
    author: 'Адитья Бхаргава, 2019',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'fantasy',
    id: '7',
  },
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, 2019',
    isBooked: true,
    bookedTill: '24.011',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'psycho&books',
    id: '8',
  },
  {
    rating: Math.round(Math.random() * 5),
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, 2019',
    reviews: [
      {
        userName: 'Иван Иванов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Cерега Сергеев',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
      {
        userName: 'Артем Артемов',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias obcaecati beatae repellat nostrum voluptates cupiditate sapiente ipsum quis sed ullam. Nam accusamus dolorem, perferendis fuga rem eveniet, sapiente necessitatibus ea dignissimos facilis expedita eum, voluptates reiciendis repudiandae officia. Quasi, consequuntur, quod nam odio nostrum eveniet voluptatum rem impedit fugiat exercitationem explicabo. Soluta sed amet odit ut labore explicabo non, numquam nobis molestiae in earum culpa alias quam assumenda fugit similique totam porro eveniet voluptate ipsum? Tempora ipsam vel maxime repellat tempore voluptatem eveniet voluptate perspiciatis, dolorum similique temporibus quos ex repellendus. Nam repellendus odit at, deleniti et amet recusandae vitae.',
        estimate: Math.round(Math.random() * 5),
        createdDate: '20 января 2019',
      },
    ],
    category: 'culture&art',
    id: '9',
  },
];
