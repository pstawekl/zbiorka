import { FundraisingsUtils } from "../Utils/FundraisingUtils";
import Fundraisings from "./Fundraisings";
import '../Styles/Views/home.scss';
import DescriptionRowsGenerator from "../Components/Description/DescriptionRowsGenerator";
import { DescriptionUtils } from "../Utils/DescriptionUtils";

export default function Home() {
    const TAGNAME = "ia-home-page";
    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__banner"}>
                <div className={TAGNAME + "__banner-left-side"}>
                </div>
                <div className={TAGNAME + "__banner-center-side"}>
                    <h1 className="title has-text-white is-uppercase has-text-weight-bold">BANDAŻE <br />
                        DLA <br />
                        UKRAINY</h1>
                    <p className="subtitle has-text-white is-uppercase has-text-weight-semibold has-text-left">
                        Twój wkład może odmienić życie osób dotkniętych konfliktem zbrojnym.
                    </p>
                    <button className="button is-black is-medium is-responsive btn-show-more is-uppercase has-text-weight-semibold"
                        onClick={
                            e => {
                                e.preventDefault();
                                document.getElementsByClassName(TAGNAME + "__description")[0].scrollIntoView({ behavior: "smooth" })
                            }}>
                        Dowiedz się więcej
                    </button>
                </div>
                <div className={TAGNAME + "__banner-right-side"}>
                </div>
            </div>
            <div className={TAGNAME + "__description"}>
                <DescriptionRowsGenerator descriptionRows={DescriptionUtils.descriptionList} />
            </div>
            <div className={TAGNAME + "__content container is-fluid"}>
                <Fundraisings fundraisingList={FundraisingsUtils.fundraisings} pageTitle={"Polecane zbiórki"} />
            </div>
        </div>
    )
}