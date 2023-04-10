import Card from "./card";
import { mediaSection1Content } from "../../../assets/media/content";

const Section1 = () => {
    return (
        <div className="grid grid-cols-12 mt-4 gap-4">
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={mediaSection1Content.card1} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={mediaSection1Content.card2} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={mediaSection1Content.card3} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={mediaSection1Content.card4} />
            </div>
        </div>
    );
};

export default Section1;