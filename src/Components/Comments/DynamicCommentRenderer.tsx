import { Comment } from "../../Utils/CommentsUtils";

interface DynamicCommentRendererProps {
    comments: Comment[];
    fundraisingSerialNumber: string;
    TAGNAME: string;
}

export default function DynamicCommentRenderer(props: DynamicCommentRendererProps) {
    const TAGNAME = "ia";
    const comments = props.comments;
    return (
        <div className={TAGNAME + "-comments"}>
            {
                comments.map((comment: Comment) => (
                    <div className={TAGNAME + "-comment"} key={`comment#${comment.fundraisingSerialNumber}?${comments.findIndex(x => x == comment)}`}>
                        <div className={TAGNAME + "-comment-header"}>
                            <span className={TAGNAME + "-comment-author"}>Autor: {comment.author}</span>
                            <span className={TAGNAME + "-comment-date"}>Utworzono: {comment.date}</span>
                        </div>
                        <div className={TAGNAME + "-comment-content"}>
                            <span>{comment.content}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
