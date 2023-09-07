import { FundraisingsUtils } from "../Utils/FundraisingUtils";
import Fundraisings from "./Fundraisings";

export default function Home() {
    const TAGNAME = "ia-home-page";
    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__header"}>
                <h1>Home</h1>
            </div>
            <div className={TAGNAME + "__content"}>
                <Fundraisings fundraisingList={FundraisingsUtils.fundraisings} pageTitle={""} />
            </div>
        </div>
    )
}