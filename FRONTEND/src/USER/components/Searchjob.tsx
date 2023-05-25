import { Box, Typography, AppBar, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}
        >
            <Box sx={{ width: '90%', height: 300, borderRadius: 2, backgroundColor: '#DBEEF9' }} >
                <Typography sx={{ fontSize: 24, fontWeight: 1000, marginTop: 10, textAlign: 'center' }}>
                    Jobs Available Now
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 1000, marginTop: 2, textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni,
                    atque delectus molestias quis?

                </Typography>

                <Box display="flex" justifyContent="center" alignItems="center">
                    <AppBar position="static" sx={{ width: '50%', backgroundColor: 'white', borderRadius: 3 }}>
                        <Toolbar sx={{ marginLeft: 15, color: '#3C6FF5', }} >
                            <Box sx={{ backgroundColor: '#3C6FF5', display: 'flex', alignItems: 'center', borderRadius: 2 }}>
                                <SearchIcon sx={{ marginLeft: 2, color: 'white' }} />
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ marginLeft: 1, color: 'white' }}
                                />
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </Box>
    );
}
