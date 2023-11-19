import DynamicFundraisingsCardsRenderer from "../Components/Fundraising/DynamicFundraisingsCardsRenderer";
import { Fundraising } from "../Utils/FundraisingUtils";
import '../Styles/Components/fundraisings.scss';

interface FundraisingsProps {
    fundraisingList: Fundraising[];
    pageTitle: string;
}

export default function Fundraisings(props: FundraisingsProps) {
    const TAGNAME = "ia-fundraisings-cards";

    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__header"}>
                <h3 className="title">{props.pageTitle}</h3>
                <span className={TAGNAME + "__fundraisings-count tag is-black" + (props.fundraisingList.length == 0 ? " disabled" : "")}>{props.fundraisingList.length}</span>
            </div>
            <div className={TAGNAME + "__content"}>
                <DynamicFundraisingsCardsRenderer fundraisings={props.fundraisingList} />
            </div>
        </div>
    )
}