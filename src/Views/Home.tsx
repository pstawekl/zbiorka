import { FundraisingsUtils } from "../Utils/FundraisingUtils";
import Fundraisings from "./Fundraisings";
import '../Styles/Views/home.scss';
import DescriptionRowsGenerator from "../Components/Description/descriptionRowsGenerator";
import { DescriptionUtils } from "../Utils/DescriptionUtils";

export default function Home() {
    const TAGNAME = "ia-home-page";
    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__banner"}>
                <div className={TAGNAME + "__banner-left-side"}></div>
                <div className={TAGNAME + "__banner-center-side"}>
                    <span>
                        <h1>Bandaże dla Ukrainy</h1>
                        <h3>Twój wkład może odmienić życie osób dotkniętych konfliktem zbrojnym</h3>
                    </span>
                </div>
                <div className={TAGNAME + "__banner-right-side"}></div>
            </div>
            <div className={TAGNAME + "__description"}>
                <DescriptionRowsGenerator descriptionRows={DescriptionUtils.descriptionList} />
            </div>
            <div className={TAGNAME + "__content"}>
                <Fundraisings fundraisingList={FundraisingsUtils.fundraisings} pageTitle={""} />
            </div>
        </div>
    )
}