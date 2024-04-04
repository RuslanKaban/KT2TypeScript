abstract class Publisher {
    private title: string;
    private author: string;
    private pubYear: number;
    private copies: number;

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    getPubYear(): number {
        return this.pubYear;
    }

    setPubYear(pubYear: number): void {
        this.pubYear = pubYear;
    }

    getCopies(): number {
        return this.copies;
    }

    setCopies(copies: number): void {
        this.copies = copies;
    }
}


class Book extends Publisher {
    private pages: number;

    getPages(): number {
        return this.pages;
    }

    setPages(pages: number): void {
        this.pages = pages;
    }
}


class Magazine extends Publisher {
    private issue: number;

    getIssue(): number {
        return this.issue;
    }

    setIssue(issue: number): void {
        this.issue = issue;
    }
}

interface Reception {
    delivery(): void;
    receive(): void;
}

class Reader {
    private firstName: string;
    private lastName: string;
    private items: Publisher[];

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getItems(): Publisher[] {
        return this.items;
    }

    setItems(items: Publisher[]): void {
        this.items = items;
    }

    borrowItem(item: Publisher): void {
        if (this.items.length < 3 && item.getCopies() > 0) {
            this.items.push(item);
            item.setCopies(item.getCopies() - 1);
            console.log("Товар успешно заимствован: " + item.getTitle());
        } else {
            console.log("Не удалось позаимствовать товар: " + item.getTitle());
        }
    }

    returnItem(item: Publisher): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            item.setCopies(item.getCopies() + 1);
            console.log("Товар успешно возвращен: " + item.getTitle());
        } else {
            console.log("Не удалось вернуть товар: " + item.getTitle());
        }
    }
}

class Library {
    private items: Publisher[];

    constructor() {
        this.items = [];
    }

    addItem(item: Publisher): void {
        this.items.push(item);
    }

    removeItem(item: Publisher): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const book1 = new Book();
book1.setTitle("Приключения Буратино");
book1.setAuthor("Толстой Л.Н.");
book1.setPubYear(1936);
book1.setCopies(5);
book1.setPages(225);

const magazine1 = new Magazine();
magazine1.setTitle("Незнайка на луне");
magazine1.setAuthor("Носов Н.Н.");
magazine1.setPubYear(1964);
magazine1.setCopies(3);
magazine1.setIssue(164);

const reader1 = new Reader();
reader1.setFirstName("Виталик");
reader1.setLastName("Гришка");
reader1.setItems([]);

const library = new Library();
library.addItem(book1);
library.addItem(magazine1);

reader1.borrowItem(book1);
reader1.borrowItem(magazine1);

reader1.returnItem(book1);