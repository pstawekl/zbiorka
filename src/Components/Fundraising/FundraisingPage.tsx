import { useEffect, useState } from "react";
import { Fundraising, FundraisingsUtils } from "../../Utils/FundraisingUtils";
import ProgressBar from "@ramonak/react-progress-bar";
import { Comment, CommentsUtils } from "../../Utils/CommentsUtils";
import "../../Styles/Components/comments.scss";
import DynamicCommentRenderer from "../Comments/DynamicCommentRenderer";

export default function FundraisingPage() {
    const [percentCompleted, setPercentCompleted] = useState<number>(0);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<Comment>({ author: '', content: '', date: '', fundraisingSerialNumber: '' }); // [author, date, content, fundraisingSerialNumber
    const [canAddNewComment, setCanAddNewComment] = useState<boolean>(false);
    const date: Date = new Date();
    const fundraisingSerialNumber: string = window.location.search.split("?")[1];
    const TAGNAME: string = "ia-fundraising-page";
    const fundraising: Fundraising = FundraisingsUtils.fundraisings.find(x => x.serialNumber == fundraisingSerialNumber)!;

    useEffect(() => {
        setPercentCompleted(fundraising.currentAmount / fundraising.goal * 100);
    }, [fundraising])

    useEffect(() => {
        setComments(CommentsUtils.commentsList);
    }, [comments])

    useEffect(() => {
        if (newComment.author !== '' && newComment.content !== '') {
            setCanAddNewComment((condition) => condition = true);
        } else {
            setCanAddNewComment((condition) => condition = false);
        }


    }, [newComment])

    function clearNewComment() {
        setNewComment({ author: '', content: '', date: '', fundraisingSerialNumber: '' });
    }

    switch (fundraising) {
        case null:
            return <div className={TAGNAME}>
                <h1>Taka zbiórka nie istnieje!</h1>
                <button className={"ia-button-primary"} onClick={() => window.location.href = "/"}>Wróć do strony głównej</button>
            </div>
        default:
            return (
                <div className={TAGNAME}>
                    <div className={TAGNAME + "__header"}>
                        <h1 className={TAGNAME + "__title"}>{fundraising.title}</h1>
                    </div>
                    <div className={TAGNAME + "__image"}>
                        <img src={fundraising.imageSrc} alt={`Zdjęcia zbiórki ${fundraising.title}`} />
                    </div>
                    <div className={TAGNAME + "__progress-bar"}>
                        <ProgressBar completed={percentCompleted}></ProgressBar>
                    </div>
                    <div className={TAGNAME + "__description"}>
                        <span>{fundraising.description}</span>
                    </div>
                    <div className={TAGNAME + "__comments"}>
                        <div className={TAGNAME + "__comments-header"}>
                            <h2>Komentarze</h2>
                        </div>
                        <DynamicCommentRenderer comments={comments} fundraisingSerialNumber={fundraising.serialNumber} TAGNAME={TAGNAME + "__comments-content"} />
                        <div className={TAGNAME + "__comments-add"}>
                            <div className={TAGNAME + "__comments-add-header"}><h1>Dodaj komentarz</h1></div>
                            <input className={TAGNAME + "__comments-add-author"} type="text" placeholder="Autor"
                                onChange={(e) => { setNewComment({ author: e.target.value, content: newComment.content, date: '', fundraisingSerialNumber: fundraisingSerialNumber }) }}
                                value={newComment.author} />
                            <textarea className={TAGNAME + "__comments-add-textarea"}
                                placeholder="Napisz komentarz..."
                                onChange={(e) => { setNewComment({ author: newComment.author, content: e.target.value, date: '', fundraisingSerialNumber: fundraisingSerialNumber }) }}
                                value={newComment.content} />
                            <div className={TAGNAME + "__comments-add-actions"}>
                                <input type="button" className={"ia-button-primary" + (!canAddNewComment ? " disabled" : "")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (newComment.author !== '' || newComment.content !== '') {
                                            setNewComment({
                                                author: newComment.author,
                                                content: newComment.content,
                                                date: `${date.getFullYear()}-${Number(String(date.getMonth).padStart(2, '0')) + 1}-${String(date.getDay()).padStart(2, "0")}`,
                                                fundraisingSerialNumber: fundraisingSerialNumber
                                            });
                                            clearNewComment();
                                            CommentsUtils.addComment(newComment);
                                        }
                                    }}
                                    value="Dodaj" />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}
