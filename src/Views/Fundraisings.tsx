import DynamicFundraisingsCardsRenderer from "../Components/Fundraising/DynamicFundraisingsCardsRenderer";
import { Fundraising } from "../Utils/FundraisingUtils";

interface FundraisingsProps {
    fundraisingList: Fundraising[];
    pageTitle: string;
}

export default function Fundraisings(props: FundraisingsProps) {
    const TAGNAME = "ia-fundraisings-cards";

    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__header"}>
                <h1>Aktualne zbiórki</h1>
                <div className={TAGNAME + "__fundraisings-count"}>{props.fundraisingList.length}</div>
            </div>
            <div className={TAGNAME + "__content"}>
                <DynamicFundraisingsCardsRenderer fundraisings={props.fundraisingList} />
            </div>
        </div>
    )
}