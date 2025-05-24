import { Navigate, Route, Routes } from "react-router-dom";

export const ApplicationRoutes = () => {
    return (
        <Routes>
            {/* 
            <Route
                path={`${window.contextPath}`}
                element={<MainLandingPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/change-password`}
                element={<ResetPassword />}
            />
            <Route
                path={`${window.contextPath}/technical-support/*`}
                element={<TechSupportModule />}
            />
            <Route
                path={`${window.contextPath}/weatherdata`}
                element={<WeatherPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/key-contacts`}
                element={<KeyContactsPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/screenreaderaccess`}
                element={<ScreenReaderPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/faq`}
                element={<FAQPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/about-section`}
                element={<AboutPage isMobile={isMobile} />}
            />
            <Route
                path={`${window.contextPath}/privacypolicy`}
                element={<PrivacyPolicyPage isMobile={isMobile} />}
            />
            <Route path={`${window.contextPath}/sitemap`} element={<SiteMap />} />
 */}


            <Route
                path="*"
                element={<Navigate replace to={`${window?.contextPath}/home`} />}
            />
        </Routes>
    );
};
