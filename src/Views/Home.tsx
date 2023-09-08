import { FundraisingsUtils } from "../Utils/FundraisingUtils";
import Fundraisings from "./Fundraisings";
import '../Styles/Views/home.scss';
import banner from '../Images/banner.jpg';

export default function Home() {
    const TAGNAME = "ia-home-page";
    return (
        <div className={TAGNAME}>
            <div className={TAGNAME + "__banner"}>              
                <span>
                    <h1>title banneru</h1>
                    <h3>subtitle banneru</h3>
                </span>
            </div>
            <div className={TAGNAME + "__content"}>
                <Fundraisings fundraisingList={FundraisingsUtils.fundraisings} pageTitle={""} />
            </div>
        </div>
    )
}