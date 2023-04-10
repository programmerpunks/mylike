import Card from "./card";
import { section2Content } from "../../../assets/marketplace/content";

const Section2 = () => {
    return (
        <div className="grid grid-cols-12 mt-4 gap-4">
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={section2Content.card1} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={section2Content.card2} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={section2Content.card3} />
            </div>
            <div className="xl:col-span-3 sm:col-span-6 col-span-12 rounded-lg">
                <Card content={section2Content.card4} />
            </div>
        </div>
    );
};

export default Section2;