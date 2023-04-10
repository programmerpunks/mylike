import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import { faqdata } from "../../assets/faq/content";

const data = faqdata;

const styles = {
    bgColor: '##212020',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',    
    arrowColor: "white",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const Qasection = () => {
    return (
        <div className="bg-[#212020] p-6 rounded-xl">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default Qasection;