import React, { useState } from 'react'
import '../css/Footer.css';
import { Box, Button, Grid, Link, Tooltip, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { getRoleBasedFooterLinks } from '../Utils';
import useUrlDialog from '../hooks/useUrlDialog';
// import { useNavigate } from 'react-router-dom';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

function Footer({ initData }) {
    const jsonData = {
        imageList: [
            {
                src: "/assets/DigitalIndia.svg",
                alt: "Digital India Logo",
                link: "https://www.digitalindia.gov.in/",
            },
            {
                src: "/assets/Indiagov.svg",
                alt: "Government of India Logo",
                link: "https://www.india.gov.in/",
            },
            {
                src: "/assets/mygov.svg",
                alt: "My Government Logo",
                link: "https://www.mygov.in/",
            },
        ],
        socialMedia: [
            {
                src: "/assets/meta.svg",
                srcH: "/assets/meta-h.svg",
                alt: "Image 1",
                link: "https://www.facebook.com/BiharKrishiApp/",
            },
            {
                srcH: "/assets/newX-h.svg",
                src: "/assets/newX.svg",
                alt: "Image 3",
                link: "https://x.com/AppKrishi",
            },
            {
                srcH: "/assets/youtube-h.svg",
                src: "/assets/youtube.svg",
                alt: "Image 2",
                link: "https://www.youtube.com/@BiharKrishiApp",
            },
        ],
    };
    const { t } = useTranslation();
    // const navigate = useNavigate();
    const footerLinks = getRoleBasedFooterLinks();
    // const { open, externalUrl, handleLinkClick, handleClose } = useUrlDialog();
    // const handleMenuClick = (path, link) => (e) => {
    //     if (path != null) {
    //         navigate(path);
    //     } else if (link != null) {
    //         handleLinkClick(link, e);

    //     }
    // };
    return (
        <footer>
            <Box id="Footer" tabindex="-1" className="footer-container">
                <Box
                    className="inner-box-screen"
                >
                    <Grid container spacing={5}>
                        {/* QR Code and Download Section */}
                        <Grid
                            item
                            xs={12}
                            sm={3}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box className="qr-section">
                                {/* <TopLineWithDot /> */}
                                <Box
                                    component="img"
                                    src={`${process.env.PUBLIC_URL}/assets/BiharKrishiLogo.png`}
                                    // width="100px"
                                    height="100px"
                                    sx={{ objectFit: "contain", pb: 1, pt: 2 }} // Ensure image scales correctly
                                    alt="QR Code"
                                />

                                <Typography variant="body2" className="qr-text">
                                    {t("scan_to_download")}
                                </Typography>

                                <Button
                                    // onClick={(e) =>
                                    //     handleLinkClick(
                                    //         "https://play.google.com/store/apps/details?id=com.dfs.biharkrishi&hl=en_IN",
                                    //         e
                                    //     )
                                    // }
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        pt: "24px",
                                    }}
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                    // style={{ width: "100px" }}
                                    />
                                </Button>
                            </Box>
                        </Grid>
                        {footerLinks?.map((linkItem, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                }}
                                id={linkItem.header}
                            >
                                <Typography
                                    variant="h6"
                                    className="link-header"
                                    textAlign="start"
                                >
                                    {t(linkItem.header)}
                                </Typography>
                                {linkItem.list.map((item, idx) => (
                                    <Box id={item.title}>
                                        <Button
                                            disableFocusRipple
                                            variant="text"
                                            size="small"
                                            key={idx}
                                            className="link-item footer-link"
                                            sx={{
                                                textAlign: "start",
                                            }}
                                        // onClick={handleMenuClick(item?.path, item?.link)}
                                        >
                                            {t(item.title)}
                                        </Button>
                                        {item?.contact && (
                                            <Tooltip title={t(item.contact)}>
                                                {item?.icon === "PhoneIcon" ? (
                                                    <PhoneRoundedIcon
                                                        style={{
                                                            color: "white",
                                                            marginRight: "5px",
                                                        }}
                                                    />
                                                ) : item?.icon === "EmailIcon" ? (
                                                    <MailOutlineRoundedIcon
                                                        style={{
                                                            color: "white",
                                                            marginRight: "5px",
                                                        }}
                                                    />
                                                ) : null}
                                                <Typography variant="caption">
                                                    {t(item.contact)}
                                                </Typography>
                                            </Tooltip>
                                        )}
                                    </Box>
                                ))}
                                {/* Social Links */}
                                {index === 2 && (
                                    <>
                                        <Typography
                                            variant="h6"
                                            color="#7FB293"
                                            textAlign="center"
                                            className="link-header"
                                            sx={{ paddingTop: 2 }}
                                        >
                                            {t("FollowUs")}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start", // Center all social icons horizontally
                                                alignItems: "start",
                                            }}
                                        >
                                            {jsonData?.socialMedia.map((image, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        textAlign: "start",
                                                        px: 2,
                                                        justifyContent: "start",
                                                        paddingLeft: "0px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <Link
                                                        component="button"
                                                        // onClick={(e) => handleLinkClick(image.link, e)}
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            color: "rgba(23, 119, 242, 1)",
                                                            height: "40px",
                                                            width: "40px",
                                                        }}
                                                    >
                                                        <ImageHoverEffect
                                                            hoverSrc={`${window.contextPath}${image.src}`}
                                                            defaultSrc={`${window.contextPath}${image.srcH}`}
                                                            altText={`${image.alt}`}
                                                        />
                                                    </Link>
                                                </Box>
                                            ))}
                                        </Box>
                                    </>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* copyright bar */}
                <Box className="outer-box-copyright">
                    <Box className="inner-box-screen copyrightText-box">
                        <Typography
                            variant="body2"
                            fontSize={".0.875rem"}
                            textAlign={"center"}
                        >
                            {t("copyright")} © 2025 {t("DepartofAgri")}, {t("govtOfBihar")}
                        </Typography>
                        <Typography
                            variant="body2"
                            fontSize={".0.875rem"}
                            textAlign={"center"}
                        >
                            {t("lastUpdate")} :{" "}
                            {initData?.releaseInfo?.webApp?.["release-date"] ?? "May 24, 2025"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </footer >
    )
}
const ImageHoverEffect = ({ defaultSrc, hoverSrc, altText }) => {
    const [src, setSrc] = useState(defaultSrc);

    return (
        <img
            src={src}
            alt={altText}
            onMouseEnter={() => setSrc(hoverSrc)}
            onMouseLeave={() => setSrc(defaultSrc)}
            className="image-hover-effect"
            style={{
                transition: "all 0.5s ease-in-out",
            }}
        />
    );
};
export default Footer