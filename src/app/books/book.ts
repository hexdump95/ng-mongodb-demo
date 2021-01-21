import { Author } from "../authors/author";

export class Book {
    id!: string;
    pages!: number;
    title!: string;
    author!: Author;
}
