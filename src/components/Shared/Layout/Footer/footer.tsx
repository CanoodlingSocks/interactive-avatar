import { Box, Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { common } from '@mui/material/colors'


const Footer = () => {
  return (
    <Box>
      <Grid
        container
        direction='column'
        alignItems='center'
      >
        <Box  bgcolor="primary.main">
          <IconButton
            href='https://www.facebook.com/'
            target='blank_'
            rel='noreferrer'
          >
            <FacebookIcon fontSize='small' />
          </IconButton>
          <IconButton
            href='https://www.twitter.com/'
            target='blank_'
            rel='noreferrer'
          >
            <TwitterIcon fontSize='small'/>
          </IconButton>
          <IconButton
            href='https://www.instagram.com/'
            target='blank_'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='small' sx={{ color: common.black }} />
          </IconButton>
        </Box>
        <Box>
          <Typography
            variant='body2'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            ChubbyBot © 2022
          </Typography>
        </Box>
      </Grid>
    </Box>
  )
}
export default Footer