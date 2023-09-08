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
                <h3>Aktualne zbiórki</h3>
                <div className={TAGNAME + "__fundraisings-count" + (props.fundraisingList.length == 0 ? " disabled" : "")}>{props.fundraisingList.length}</div>
            </div>
            <div className={TAGNAME + "__content"}>
                <DynamicFundraisingsCardsRenderer fundraisings={props.fundraisingList} />
            </div>
        </div>
    )
}