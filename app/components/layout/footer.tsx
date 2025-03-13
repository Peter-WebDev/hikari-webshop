import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Grid2, IconButton, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component={"footer"} sx={{ bgcolor: "primary.main", p: 2 }}>
            <Grid2
                container
                gap={4}
                justifyContent={{
                    xs: "center",
                    sm: "space-between"
                }}
                alignItems={{
                    xs: "center",
                    sm: "start"
                }}
                direction={{
                    xs: "column",
                    sm: "row"
                }}
                margin={2}>
                <Box>
                    <Typography
                        component="h2"
                        variant="h5"
                        id="logotype"
                    >
                        Hikari
                    </Typography>
                    <Box component="div" aria-labelledby="logotype" sx={{ padding: 0, margin: 0, listStyle: "none" }}>
                        <Typography
                            component="h3"
                            variant="h6"
                            id="logotype"
                            align="center"
                        >
                            ヒカリ
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        component="h2"
                        variant="h5"
                        id="contact-us"
                        textAlign={{
                            xs: "center",
                            sm: "left"
                        }}
                    >
                        Contact us
                    </Typography>
                    <Box component="div" aria-labelledby="contact-us" sx={{ padding: 0, margin: 0, listStyle: "none" }}>
                        <address>
                            Hikari Corporation<br />
                            42 Shard Street<br />
                            London, CA 90210
                        </address>
                    </Box>
                </Box>
                <Grid2
                    container={true}
                    alignItems={{
                        xs: "center",
                        sm: "start"
                    }}
                    direction={{
                        xs: "column"
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                        id="contact-us"
                    >
                        Socials
                    </Typography>
                    <Grid2 container={true} flex-direction={"row"} alignItems={"center"}>
                        <IconButton aria-label="X logo">
                            <XIcon />
                        </IconButton>
                        <IconButton aria-label="Facebook logo">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="YouTube logo">
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram logo">
                            <InstagramIcon />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    );
}