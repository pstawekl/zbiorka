export class CommentsUtils {
    public static commentsList: Comment[] = [
        {
            author: "John Doe",
            content: "Przekazałem 100 zł. Powodzenia w realizacji celu",
            date: "2020-01-01",
            fundraisingSerialNumber: "1"
        },
        {
            author: "Jan Kowalski",
            content: "Przekazałem 500 zł. Powodzenia w realizacji celu",
            date: "2020-01-01",
            fundraisingSerialNumber: "1"
        },
        {

            author: "Artur Siemaszko",
            content: "Przekazałem 300 zł. Powodzenia w realizacji celu",
            date: "2020-01-01",
            fundraisingSerialNumber: "2"
        },
        {

            author: "Krystian Kryształ",
            content: "Przekazałem 200 zł. Powodzenia w realizacji celu",
            date: "2020-01-01",
            fundraisingSerialNumber: "3"
        },
    ]

    public static getComments(): Comment[] {
        return this.commentsList;
    }

    public static addComment(comment: Comment) {
        this.commentsList.push(comment);
    }
}

export class Comment {
    public fundraisingSerialNumber: string;
    public author: string;
    public content: string;
    public date: string;

    constructor(author: string, content: string, date: string, fundraisingSerialNumber: string) {
        this.author = author;
        this.content = content;
        this.date = date;
        this.fundraisingSerialNumber = fundraisingSerialNumber;
    }
}

