// export const getCurrentLanguage = () => {
//     return PersistantStorage.get("WebApp.Employee.locale");
// };
export const getRoleBasedModules = () => {
    let userModules = [
        { title: "DFSWEB_HOME", path: `${window.contextPath}/home` },
        { title: "DFSWEB_About", path: null, key: "#about-home" },
        {
            title: "DFSWEB_ASSETS",
            path: `${window.contextPath}/assets-section`,
        },
        {
            title: "DFSWEB_SCHEMES",
            isMenu: true,
            menuItems: [
                { title: "DFSWEB_SCHEMES", path: `${window.contextPath}/schemes` },
            ],
        },
        {
            title: "DFSWEB_MANDIPRICE",
            path: `${window.contextPath}/mandi`,
        },

    ];


    return userModules;
};

export const getRoleBasedFooterLinks = () => {
    const userModules = [
        {
            header: "ImportantLinks",
            list: [
                {
                    title: "DFSWEB_ASSETS",
                    description: "",
                    path: `${window.contextPath}/assets-section`,
                    image: "Assets",
                },
                {
                    title: "DFSWEB_SCHEMES",
                    description: "",
                    path: `${window.contextPath}/schemes`,
                    image: "Schemes",
                },
                {
                    title: "DFSWEB_MANDIPRICE",
                    description: "",
                    path: `${window.contextPath}/mandi`,
                    image: "MandiPrice",
                },
                {
                    title: "DFSWEB_HELP",
                    description: "",
                    path: `${window.contextPath}/help`,
                    image: "Help",
                },
            ],
        },
        {
            header: "OtherImportantLinks",
            list: [
                {
                    title: "DBTPortal",
                    description: "",
                    link: `https://dbtagriculture.bihar.gov.in/`,
                    image: "Help",
                },
                {
                    title: "BiharSeedCertificationAgency",
                    description: "",
                    link: `https://bssca.co.in/`,
                    image: "Help",
                },
                {
                    title: "BAVAS",
                    description: "",
                    link: `https://bavas.bihar.gov.in/`,
                    image: "Help",
                },
                {
                    title: "DirectorateofHorticulture",
                    description: "",
                    link: `https://bavas.bihar.gov.in/`,
                    image: "Help",
                },
                {
                    title: "KisanCallCentrePortal",
                    description: "",
                    link: `https://www.manage.gov.in/kcc/kcc.asp#:~:text=1800%2D180%2D1551)`,
                    image: "Help",
                },
            ],
        },
        {
            header: "ContactInformation",
            list: [
                {
                    title: "BiharKrishiSupport",
                    description: "",
                    contact: "support.biharkrishi@bihar.gov.in",
                    image: "Help",
                    icon: "EmailIcon",
                },
                {
                    title: "KisanCallCentre",
                    description: "",
                    contact: "1800-180-1551",
                    icon: "PhoneIcon",
                },
            ],
        },
    ];






    return userModules;
};